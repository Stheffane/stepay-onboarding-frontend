import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  Tooltip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { SimulacaoCard } from "./SimulationCard";
import Footer from "../../../../shared/components/footer/Footer";

export type EtapaStatus = "pendente" | "concluido";

export type Etapa = {
  label: string;
  descricao: string;
  status: EtapaStatus;
};

type Props = {
  etapas: Etapa[];
  onBack: () => void;
  onNext: () => void;
};

function StatusIcon({ status }: { status: EtapaStatus }) {
  if (status === "concluido") {
    return (
      <CheckCircleIcon
        fontSize="small"
        sx={{ color: "success.main", flexShrink: 0 }}
      />
    );
  }

  return (
    <Tooltip title="Pendente" placement="top" arrow>
      <AccessTimeIcon
        fontSize="small"
        sx={{ color: "error.main", flexShrink: 0, cursor: "pointer" }}
      />
    </Tooltip>
  );
}

export function ProximosPassosBase({ etapas, onBack, onNext }: Props) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>

        {/* CARD RESUMO */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SimulacaoCard />
        </Grid>

        {/* ETAPAS */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box pt={{ xs: 2, md: 8 }}>
            <Typography variant="h4" mb={1}>
              Que bom que você chegou até aqui!
            </Typography>

            <Typography variant="h6" color="text.secondary" mb={4}>
              Agora precisamos confirmar alguns dados
            </Typography>

            <Box display="flex" flexDirection="column" gap={0}>
              {etapas.map((etapa, index) => (
                <Box key={etapa.label}>
                  <Box py={2}>
                    <Typography
                      variant="caption"
                      color="text.disabled"
                      textTransform="uppercase"
                      letterSpacing={1}
                    >
                      {etapa.label}
                    </Typography>

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={0.5}
                    >
                      <Typography variant="body1" color="text.secondary">
                        {etapa.descricao}
                      </Typography>

                      <StatusIcon status={etapa.status} />
                    </Box>
                  </Box>

                  {index < etapas.length - 1 && (
                    <Divider sx={{ borderColor: "#E9EAFA" }} />
                  )}
                </Box>
              ))}
            </Box>

            <Box mt={3}>
              <Tooltip
                title={
                  <Box>
                    <Typography variant="body2" fontWeight={700} mb={0.5}>
                      ⚠ Atenção
                    </Typography>
                    <Typography variant="body2">
                      Pela nossa plataforma você irá realizar a captura de uma
                      foto de um documento (RG ou CNH), logo em seguida iremos
                      realizar uma foto de seu perfil (selfie).
                    </Typography>
                  </Box>
                }
                placement="right"
                arrow
              >
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer", display: "inline-block" }}
                >
                  Por que isso é importante?
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        </Grid>

      </Grid>

      <Footer
        leftButton="voltar"
        leftButtonOnClick={onBack}
        rightButton="avancar"
        rightButtonOnClick={onNext}
      />
    </Container>
  );
}