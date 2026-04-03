import {
  Container,
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../shared/components/footer/Footer";

export type MotivoDesistencia = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  subtitle: string;
  motivos: MotivoDesistencia[];
  extraFields?: React.ReactNode;
  onConfirm: (motivo: string, motivoCustomizado: string) => void;
};

export function DesistenciaBase({
  title,
  subtitle,
  motivos,
  extraFields,
  onConfirm,
}: Props) {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState("");
  const [motivoCustomizado, setMotivoCustomizado] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const canAdvance = motivo !== "" && (motivo !== "Outros" || motivoCustomizado !== "");

  const handleConfirm = () => {
    onConfirm(motivo, motivoCustomizado);
    setSuccessOpen(true);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box pt={6} pb={4}>
          <Typography variant="h4" mb={2}>
            {title}
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            {subtitle}
          </Typography>

          <ToggleButtonGroup
            orientation="vertical"
            exclusive
            value={motivo}
            onChange={(_, v) => v && setMotivo(v)}
            fullWidth
            sx={{ gap: 2, mb: 3 }}
          >
            {motivos.map((m) => (
              <ToggleButton
                key={m.value}
                value={m.value}
                sx={{
                  justifyContent: "flex-start",
                  px: 3,
                  py: 2,
                  borderRadius: "8px !important",
                  border: "1px solid",
                  borderColor: "divider",
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                }}
              >
                {m.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          {motivo === "Outros" && (
            <TextField
              label="Conte-nos o motivo da sua desistência"
              fullWidth
              value={motivoCustomizado}
              onChange={(e) => setMotivoCustomizado(e.target.value)}
              inputProps={{ maxLength: 30 }}
              sx={{ mb: 3 }}
            />
          )}

          {extraFields}
        </Box>

        <Footer
          leftButton="voltar"
          leftButtonOnClick={() => navigate(-1)}
          rightButton="confirmar"
          rightButtonOnClick={handleConfirm}
          rightButtonDisabled={!canAdvance}
        />
      </Container>

      {/* MODAL SUCESSO */}
      <Dialog open={successOpen} disableEscapeKeyDown onClose={() => null}>
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={2}
            p={2}
          >
            <Box
              component="img"
              src="/images/backgrounds/modal-success-trash.png"
              alt="Sucesso"
              sx={{ width: 80 }}
            />
            <Typography variant="h6">
              Recebemos a sua recusa na proposta e agradecemos pelo feedback.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              href="https://github.com/Stheffane/stepay-onboarding-frontend"
            >
              Finalizar
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}