import { Container, Typography, Box, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import HomeIcon from "@mui/icons-material/Home";

export function NotFoundPage() {
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
        <SearchOffIcon sx={{ fontSize: 80, color: "text.disabled" }} />

        <Typography variant="h4" fontWeight={900} color="primary">
          Oops!
        </Typography>

        <Typography variant="h1" fontWeight={900} color="text.disabled">
          404
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Sorry! Page Not Found
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="/"
          startIcon={<HomeIcon color="primary.contrastText" />}
          sx={{ mt: 2 }}
        >
          Início
        </Button>
      </Box>
    </Container>
  );
}