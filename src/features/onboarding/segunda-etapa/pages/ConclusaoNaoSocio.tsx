import { Container, Typography, Box } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import Footer from "../../../../shared/components/footer/Footer";

const DOCUMENTOS = [
  {
    icon: <DescriptionOutlinedIcon fontSize="medium" />,
    label: "Contrato social",
  },
  {
    icon: <AccountBalanceOutlinedIcon fontSize="medium" />,
    label: "Extrato bancário",
  },
];

export default function ConclusaoNaoSocioPage() {
  return (
    <Container maxWidth="sm">
      <Box pt={6} pb={4}>
        <Typography variant="h4" mb={2}>
          Muito bem! Enviado com sucesso!
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={1}>
          Iremos lhe informar por e-mail quando essa etapa de identificação for
          concluída.
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          Enquanto isso, separe alguns documentos para a próxima etapa:
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          {DOCUMENTOS.map(({ icon, label }) => (
            <Box key={label} display="flex" alignItems="center" gap={2}>
              <Box color="primary.main">{icon}</Box>
              <Typography variant="h6" fontWeight={500}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer
        rightButton="finalizar"
        rightButtonLink="https://github.com/Stheffane/stepay-onboarding-frontend"
      />
    </Container>
  );
}