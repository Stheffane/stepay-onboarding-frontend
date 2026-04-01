import { Container, Typography, Box } from "@mui/material";
import Footer from "../../../../shared/components/footer/Footer";

export default function AnaliseManualPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        pt={6}
        gap={2}
      >

        <Typography variant="h4">
          Estamos avaliando seu pedido!
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Agora faremos uma análise da sua solicitação e enviaremos um e-mail
          te informando o status dela. ✌️
        </Typography>

        <Typography variant="h5" mt={2}>
          Confira sua caixa de entrada. Até mais!
        </Typography>

        <Typography variant="body1" color="text.secondary">
          (Confira também no spam, caso não encontre nada na caixa de entrada)
        </Typography>
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://github.com/Stheffane/stepay-onboarding-frontend"
      />
    </Container>
  );
}