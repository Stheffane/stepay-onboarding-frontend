import { Container, Typography, Box } from "@mui/material";
import { useMockProposta } from "../hooks/useMockProposta";
import { PropostaResumoCard } from "../components/PropostaResumoCard";
import Footer from "../../../../shared/components/footer/Footer";

export default function VisualizacaoSolicitacaoPage() {
  const proposta = useMockProposta();

  return (
    <Container maxWidth="sm">
      <Box pt={6} pb={4}>
        <Typography variant="h4" mb={1}>
          Sua Solicitação
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Acompanhe o resumo completo da sua proposta
        </Typography>

        <PropostaResumoCard proposta={proposta} showBankData />
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://github.com/Stheffane/stepay-onboarding-frontend"
      />
    </Container>
  );
}