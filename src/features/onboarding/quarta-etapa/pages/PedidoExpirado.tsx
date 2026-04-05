import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function PedidoExpiradoPage() {
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
        <ErrorOutlineOutlinedIcon
          sx={{ fontSize: 80, color: "secondary.main" }}
        />

        <Typography variant="h4" fontWeight={800}>
          Oops!!
        </Typography>

        <Typography variant="h4">
          Seu pedido foi expirado!
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Esse pedido não se encontra disponível — o prazo para conclusão
          encerrou. Não se preocupe, solicite agora mesmo o empréstimo que irá
          alavancar o crescimento da sua empresa.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="https://www.stepay.com.br/"
          sx={{ mt: 2 }}
        >
          Fazer Pedido
        </Button>
      </Box>
    </Container>
  );
}