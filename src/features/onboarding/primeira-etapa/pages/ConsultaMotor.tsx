import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";

import { useEffect, useRef } from "react";
import { useOnboardingStore } from "../../../../store";
import { useMockMotorCredito } from "../hooks/useMockMotorCredito";

const ICON_PAPER_BOX = "/images/icon_paper-box.svg";

const PHRASES = [
  "Estamos buscando dados da sua empresa…",
  "Agora dados dos sócios...",
  "Isso pode levar alguns minutinhos...",
  "Aproveite, beba um copo de água...",
  "Estamos quase finalizando...",
];

export default function ConsultaMotorPage() {
  const { model } = useOnboardingStore();
  const { executar, loading, show90DiasModal, setShow90DiasModal } =
    useMockMotorCredito();

  const hasExecuted = useRef(false);

  const solicitante = model?.dadosPessoais?.userName ?? "";
  const firstName = solicitante.split(" ")[0];
  const cnpj = model?.detalhesPedido?.userCNPJ ?? "";

  useEffect(() => {
    if (hasExecuted.current) return;
    hasExecuted.current = true;
    executar(cnpj);
  }, [cnpj, executar]);

  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          pt={8}
          gap={3}
        >
          <Typography variant="h4" fontWeight={700}>
            Bacana{firstName ? `, ${firstName}` : ""}!
          </Typography>

          <Typography variant="h6" fontWeight={500}>
            Estamos analisando sua solicitação,
            <br /> esse processo demora no <strong>máximo</strong> 2 minutos!
          </Typography>

          {loading && <CircularProgress size={48} sx={{ my: 2 }} />}

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ animation: loading ? "fadeIn 1s ease-in" : "none" }}
          >
            {PHRASES[0]}
            <br />
            Por favor, não feche seu navegador.
          </Typography>
        </Box>
      </Container>

      {/* MODAL 90 DIAS */}
      <Dialog
        open={show90DiasModal}
        onClose={() => setShow90DiasModal(false)}
        disableEscapeKeyDown
        PaperProps={{ sx: { borderRadius: 3, p: 2, maxWidth: 480 } }}
      >
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={2}
          >
            <Box
              component="img"
              src={ICON_PAPER_BOX}
              alt="Caixa de papéis"
              sx={{ width: 80 }}
            />

            <Typography variant="h5" fontWeight={700}>
              Oops!
            </Typography>

            <Typography variant="h6" pb={2}>
              Já consta uma solicitação para este CNPJ ou CPF nos últimos 90
              dias. Tente novamente após esse período.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="https://www.stepay.com.br/"
              fullWidth
            >
              OK
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}