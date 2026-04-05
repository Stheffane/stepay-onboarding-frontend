import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../shared/components/footer/Footer";
import { PATHS } from "../../../../app/router/paths";

type DocumentoConfig = {
  id: string;
  titulo: string;
  tooltip: string;
};

// TODO: substituir por chamada à API quando disponível
const MOCK_DOCUMENTOS: DocumentoConfig[] = [
  {
    id: "contrato-social",
    titulo: "Contrato Social",
    tooltip: "Envie o contrato social da empresa atualizado e completo.",
  },
  {
    id: "extrato-bancario",
    titulo: "Extrato Bancário",
    tooltip: "Envie os extratos bancários dos últimos 3 meses.",
  },
  {
    id: "rg-cnh",
    titulo: "RG ou CNH",
    tooltip: "Envie a frente e o verso do documento. Formatos aceitos: JPG, PNG ou PDF.",
  },
];

type UploadedFile = {
  documentoId: string;
  file: File;
};

export default function DocumentosPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const getFilesForDoc = (id: string) =>
    uploadedFiles.filter((f) => f.documentoId === id);

  const handleFileChange = (
    documentoId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = Array.from(e.target.files ?? []);
    const newFiles = selected.map((file) => ({ documentoId, file }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const handleRemove = (documentoId: string, fileName: string) => {
    setUploadedFiles((prev) =>
      prev.filter(
        (f) => !(f.documentoId === documentoId && f.file.name === fileName)
      )
    );
  };

  const handleSubmit = () => {
    const allHaveFiles = MOCK_DOCUMENTOS.every(
      (doc) => getFilesForDoc(doc.id).length > 0
    );

    if (!allHaveFiles) {
      alert("Insira pelo menos um documento em cada campo.");
      return;
    }

    // TODO: enviar arquivos para API
    navigate(PATHS.TERCEIRA_ETAPA.SOLICITACAO_PROXIMOS_PASSOS);
  };

  return (
    <Container maxWidth="sm">
      <Box pt={6} pb={2}>
        <Typography variant="h4" mb={1}>
          Documentos
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Envie seus documentos. Esta é a última etapa da sua solicitação.
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {MOCK_DOCUMENTOS.map((doc) => {
            const docFiles = getFilesForDoc(doc.id);

            return (
              <Box key={doc.id}>
                <Paper
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "action.hover",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    {doc.titulo}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={1}>
                    <input
                      ref={(el) => { inputRefs.current[doc.id] = el; }}
                      type="file"
                      hidden
                      multiple
                      accept="image/png,image/jpeg,application/pdf"
                      onChange={(e) => handleFileChange(doc.id, e)}
                    />
                    <Button
                      variant="text"
                      startIcon={<UploadFileIcon />}
                      onClick={() => inputRefs.current[doc.id]?.click()}
                    >
                      Enviar
                    </Button>

                    <Tooltip title={doc.tooltip} placement="right" arrow>
                      <InfoOutlinedIcon
                        fontSize="small"
                        sx={{ color: "text.disabled", cursor: "pointer" }}
                      />
                    </Tooltip>
                  </Box>
                </Paper>

                {docFiles.length > 0 && (
                  <List dense disablePadding>
                    {docFiles.map(({ file }) => (
                      <Box key={file.name}>
                        <ListItem
                          sx={{ px: 1 }}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              size="small"
                              onClick={() => handleRemove(doc.id, file.name)}
                            >
                              <DeleteOutlineIcon fontSize="small" />
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary={file.name}
                            primaryTypographyProps={{
                              variant: "body2",
                              noWrap: true,
                              sx: { maxWidth: 280 },
                            }}
                          />
                        </ListItem>
                        <Divider />
                      </Box>
                    ))}
                  </List>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Footer
        rightButton="avancar"
        rightButtonOnClick={handleSubmit}
      />
    </Container>
  );
}