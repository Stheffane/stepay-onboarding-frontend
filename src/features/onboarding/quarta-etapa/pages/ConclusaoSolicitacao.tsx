import { Container, Typography, Box, Divider } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useOnboardingStore } from "../../../../store";
import { useMockProposta } from "../hooks/useMockProposta";
import { PropostaResumoCard } from "../components/PropostaResumoCard";
import Footer from "../../../../shared/components/footer/Footer";

export default function ConclusaoSolicitacaoPage() {
  const { model } = useOnboardingStore();
  const proposta = useMockProposta();

  const cpf = model?.dadosPessoais?.userNumberDoc ?? "";
  const cpfFormatado = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );
  const dataAssinatura = new Date().toLocaleDateString("pt-BR");
  const horaAssinatura = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Container maxWidth="sm">
      <Box pt={6} pb={4}>
        <Typography variant="h4" mb={1}>
          Conclusão de solicitação
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Veja o resumo da sua proposta
        </Typography>

        <PropostaResumoCard proposta={proposta} showBankData />

        <Divider sx={{ my: 4 }} />

        {/* ASSINATURA */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          p={3}
          border="1px solid"
          borderColor="success.light"
          borderRadius={2}
          bgcolor="success.50"
        >
          <CheckCircleOutlineIcon color="success" sx={{ flexShrink: 0 }} />
          <Typography variant="body2" color="text.secondary">
            Proposta assinada com sucesso pelo CPF{" "}
            <Box component="span" color="primary.main" fontWeight={600}>
              {cpfFormatado}
            </Box>{" "}
            na data{" "}
            <Box component="span" color="primary.main" fontWeight={600}>
              {dataAssinatura}
            </Box>{" "}
            às{" "}
            <Box component="span" color="primary.main" fontWeight={600}>
              {horaAssinatura}
            </Box>
          </Typography>
        </Box>
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://github.com/Stheffane/stepay-onboarding-frontend"
      />
    </Container>
  );
}