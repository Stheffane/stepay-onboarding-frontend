import { Container, Typography, Box, Button } from "@mui/material";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

// const ICON_URL = "/images/icon-clock-box-with-papers.svg";

export default function PedidoCanceladoPage() {
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
        <HighlightOffOutlinedIcon
          sx={{ fontSize: 80, color: "secondary.main" }}
        />

        <Typography variant="h4" fontWeight={800}>
          Oops!!
        </Typography>

        <Typography variant="h4">
          Seu pedido foi cancelado!
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Caso um dos sócios da sua empresa tenha desistido da solicitação ou
          sido reprovado no cadastro, infelizmente não conseguimos prosseguir
          com o seu pedido de empréstimo. Esperamos vê-lo em breve. Em caso de
          dúvidas, entre em contato conosco.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="https://github.com/Stheffane/stepay-onboarding-frontend"
          sx={{ mt: 2 }}
        >
          Finalizar
        </Button>
      </Box>
    </Container>
  );
}