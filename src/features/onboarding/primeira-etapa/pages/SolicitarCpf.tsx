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
} from "../schemas/solicitarCpf.schema";
import { useMockCpfValidation } from "../hooks/useMockCpfValidation";
import Footer from "../../../../shared/components/footer/Footer";
import { formatMoney } from "../../../../shared/utils";

// mock de dados financeiros derivados da simulação
// TODO: substituir pelos campos reais da API (vl_iof, vl_tac, etc.)
const MOCK_IOF_RATE = 0.0038;
const MOCK_TAC_RATE = 0.01;

export default function SolicitarCpfPage() {
  const navigate = useNavigate();
  const { model } = useOnboardingStore();
  const { validate, loading } = useMockCpfValidation();

  const simulacao = model?.simulacao;
  const valor = simulacao?.simulatedValue ?? 0;
  const parcelas = simulacao?.simulatedParcelas ?? 0;

  // valores mock derivados da simulação
  const iof = valor * MOCK_IOF_RATE;
  const tac = valor * MOCK_TAC_RATE;
  const total = valor + iof + tac;
  const valorParcela = parcelas > 0 ? total / parcelas : 0;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SolicitarCpfForm>({
    resolver: zodResolver(solicitarCpfSchema),
    defaultValues: {
      cpf: model?.dadosPessoais?.userNumberDoc ?? "",
    },
  });

  const onSubmit = ({ cpf }: SolicitarCpfForm) => {
    validate(cpf);
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
      <form id="solicitar-cpf-form" onSubmit={handleSubmit(onSubmit)}>
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
                  <Typography fontWeight={600}>Total do empréstimo</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontWeight={600}>{formatMoney(total)}</Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Typography color="text.secondary">
                Pagamento em{" "}
                <Box component="span" color="primary.main" fontWeight={600}>
                  {parcelas} parcelas
                </Box>{" "}
                de
              </Typography>

              <Typography variant="h4" mt={1}>
                {formatMoney(valorParcela)}
              </Typography>

              <Typography variant="body2" color="text.secondary" mt={2}>
                O CET já está incluso no valor total. Esses valores poderão
                sofrer alterações no final da solicitação.
              </Typography>
            </Card>
          </Grid>

          {/* FORMULÁRIO CPF */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" mb={1}>
              Conta pra gente, quem é você
            </Typography>

            <Typography variant="h6" mb={4}>
              Para continuar precisamos do seu CPF
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
        leftButton="voltar"
        leftButtonOnClick={() => navigate(-1)}
        rightButton="avancar"
        rightButtonForm="solicitar-cpf-form"
      />
    </Container>
  );
}