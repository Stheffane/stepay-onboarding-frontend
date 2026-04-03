import { Container, Typography, Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Footer from "../../../../shared/components/footer/Footer";

export default function SolicitacaoConcluidaPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        pt={8}
        gap={3}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: 80, color: "success.main" }}
        />

        <Typography variant="h4">
          Solicitação concluída!
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Recebemos todos os seus documentos. Agora é só aguardar — entraremos
          em contato pelo e-mail cadastrado com as próximas etapas.
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Obrigado por escolher a Stepay! 🎉
        </Typography>
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://www.stepay.com.br/"
      />
    </Container>
  );
}