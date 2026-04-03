import {
  Card,
  Typography,
  Grid,
  Divider,
  Box,
} from "@mui/material";

import { useOnboardingStore } from "../../../../store";
import { formatMoney } from "../../../../shared/utils";

const MOCK_IOF_RATE = 0.0038;
const MOCK_TAC_RATE = 0.01;

export function SimulacaoCard() {
  const { model } = useOnboardingStore();

  const valor = model?.simulacao?.simulatedValue ?? 0;
  const parcelas = model?.simulacao?.simulatedParcelas ?? 0;

  const iof = valor * MOCK_IOF_RATE;
  const tac = valor * MOCK_TAC_RATE;
  const total = valor + iof + tac;
  const valorParcela = parcelas > 0 ? total / parcelas : 0;

  return (
    <Card
      sx={{
        p: 3,
        mt: { xs: 2, md: 8 },
        borderLeft: (theme) => `6px solid ${theme.palette.primary.main}`,
      }}
    >
      <Typography variant="h6" mb={2}>
        Seu Empréstimo
      </Typography>

      <Grid container spacing={1}>
        <Grid size={6}>
          <Typography color="text.secondary">Valor</Typography>
        </Grid>
        <Grid size={6}>
          <Typography color="text.secondary">{formatMoney(valor)}</Typography>
        </Grid>

        <Grid size={6}>
          <Typography color="text.secondary">IOF</Typography>
        </Grid>
        <Grid size={6}>
          <Typography color="text.secondary">{formatMoney(iof)}</Typography>
        </Grid>

        <Grid size={6}>
          <Typography color="text.secondary">Taxa de cadastro</Typography>
        </Grid>
        <Grid size={6}>
          <Typography color="text.secondary">{formatMoney(tac)}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={1}>
        <Grid size={6}>
          <Typography fontWeight={600}>Total</Typography>
        </Grid>
        <Grid size={6}>
          <Typography fontWeight={600}>{formatMoney(total)}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Typography color="text.secondary">
        <Box component="span" color="primary.main" fontWeight={600}>
          {parcelas} parcelas
        </Box>{" "}
        de
      </Typography>

      <Typography variant="h4" mt={1}>
        {formatMoney(valorParcela)}
      </Typography>

      <Typography variant="body2" color="text.secondary" mt={2}>
        O CET já está incluso no valor total. Valores podem sofrer alterações no
        final da solicitação.
      </Typography>
    </Card>
  );
}