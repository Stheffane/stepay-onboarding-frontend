import { Container, Typography, Box } from "@mui/material";
import Footer from "../../../../shared/components/footer/Footer";

export default function PedidoNegadoPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        pt={6}
      >

        <Typography variant="h4" mb={2}>
          Que pena! 😟
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Por enquanto não será possível atender a solicitação de crédito para
          sua empresa. Mas fique tranquilo, vamos informar com mais detalhes o
          motivo pelo qual seu pedido não foi atendido.
        </Typography>

        <Typography variant="h6" color="text.secondary" mt={2}>
          Agradecemos o seu interesse nos produtos financeiros da Stepay.{" "}
          <br />
          Até mais!
        </Typography>
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://github.com/Stheffane/stepay-onboarding-frontend"
      />
    </Container>
  );
}