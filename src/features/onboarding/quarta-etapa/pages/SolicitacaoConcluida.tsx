import { Container, Typography, Box, Button } from "@mui/material";
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';

export default function SolicitacaoConcluidaPage() {
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
        <OfflinePinOutlinedIcon
          sx={{ fontSize: 80, color: "success.main" }}
        />

        <Typography variant="h4">
          Sua solicitação de crédito foi concluída com sucesso!
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Você pode acompanhar o status da sua solicitação dentro da plataforma,
          no menu: "Meus empréstimos".
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="https://github.com/Stheffane/stepay-onboarding-frontend"
          sx={{ mt: 2 }}
        >
          Acessar Minha Área
        </Button>
      </Box>
    </Container>
  );
}