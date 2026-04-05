import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function ErrorPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        pt={12}
        gap={3}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} />

        <Typography variant="h4" fontWeight={900} color="primary">
          Ops, algo deu errado
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Alguma coisa deu errado, volte para o início e tente novamente.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="/"
          startIcon={<ArrowBackIcon color="primary.contrastText" />}
          sx={{ mt: 2 }}
        >
          Volte para o início
        </Button>
      </Box>
    </Container>
  );
}