import {
  Container,
  Typography,
  Grid,
  Card,
  Divider,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";

import { useOnboardingStore } from "../../../../store";
import {
  solicitarCpfSchema,
  type SolicitarCpfForm,
} from "../../primeira-etapa/schemas/solicitarCpf.schema";
import { useMockCpfValidation } from "../../primeira-etapa/hooks/useMockCpfValidation";
import Footer from "../../../../shared/components/footer/Footer";
import { PATHS } from "../../../../app/router/paths";
import { formatMoney } from "../../../../shared/utils";

const MOCK_IOF_RATE = 0.0038;
const MOCK_TAC_RATE = 0.01;

export default function FluxoSocioPage() {
  const navigate = useNavigate();
  const { model } = useOnboardingStore();
  const { validate, loading } = useMockCpfValidation();

  const simulacao = model?.simulacao;
  const valor = simulacao?.simulatedValue ?? 0;
  const parcelas = simulacao?.simulatedParcelas ?? 0;
  const cnpj = model?.detalhesPedido?.userCNPJ ?? "";

  const iof = valor * MOCK_IOF_RATE;
  const tac = valor * MOCK_TAC_RATE;
  const total = valor + iof + tac;
  const valorParcela = parcelas > 0 ? total / parcelas : 0;

  const cnpjFormatado = cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SolicitarCpfForm>({
    resolver: zodResolver(solicitarCpfSchema),
    defaultValues: { cpf: "" },
  });

  const onSubmit = ({ cpf }: SolicitarCpfForm) => {
    validate(cpf, "socio-unico");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <form id="fluxo-socio-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>

          {/* CARD RESUMO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: 3,
                mt: { xs: 2, md: 8 },
                borderLeft: (theme) =>
                  `6px solid ${theme.palette.primary.main}`,
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
                  <Typography color="text.secondary">
                    {formatMoney(valor)}
                  </Typography>
                </Grid>

                <Grid size={6}>
                  <Typography color="text.secondary">IOF</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography color="text.secondary">
                    {formatMoney(iof)}
                  </Typography>
                </Grid>

                <Grid size={6}>
                  <Typography color="text.secondary">
                    Taxa de cadastro
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography color="text.secondary">
                    {formatMoney(tac)}
                  </Typography>
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
                {parcelas}x de
              </Typography>
              <Typography variant="h4" mt={1}>
                {formatMoney(valorParcela)}
              </Typography>

              <Typography variant="body2" color="text.secondary" mt={2}>
                Valores podem sofrer alteração na etapa final.
              </Typography>
            </Card>
          </Grid>

          {/* FORMULÁRIO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" mb={1}>
              Olá, você pediu um empréstimo
            </Typography>

            <Typography variant="h6" color="text.secondary" mb={1}>
              Para continuar o processo precisamos do seu CPF.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Pedido realizado para CNPJ: <strong>{cnpjFormatado}</strong>
            </Typography>

            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  value={field.value || ""}
                  onValueChange={(values) => field.onChange(values.value)}
                  format="###.###.###-##"
                  customInput={TextField}
                  fullWidth
                  label="CPF"
                  inputMode="numeric"
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                />
              )}
            />

            <Typography variant="body2" color="text.secondary" mt={4}>
              Não se preocupe! Usamos somente essas informações para continuar
              com sua solicitação de empréstimo.
            </Typography>
          </Grid>

        </Grid>
      </form>

      <Footer
        leftButton="desistir"
        leftButtonOnClick={() =>
          navigate(PATHS.TERCEIRA_ETAPA.DESISTENCIA_SOCIO)
        }
        rightButton="avancar"
        rightButtonForm="fluxo-socio-form"
      />
    </Container>
  );
}