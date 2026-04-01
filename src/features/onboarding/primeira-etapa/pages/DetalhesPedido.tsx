import {
  Typography,
  Grid,
  TextField,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";

import { useOnboardingStore, useOnboardingFlowStore } from "../../../../store";
import {
  detalhesPedidoSchema,
  type DetalhesPedidoForm,
} from "../schemas/detalhesPedido.schema";
import { OnboardingFormPage } from "../../../../shared/components";
import { PATHS } from "../../../../app/router/paths";
import { useHydrateForm } from "../../../../shared/hooks";

const LOAN_MIN = 10000;
const LOAN_MAX = 300000;
const LOAN_STEP = 5000;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export default function DetalhesDoPedidoPage() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();
  const next = useOnboardingFlowStore((s) => s.next);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetalhesPedidoForm>({
    resolver: zodResolver(detalhesPedidoSchema),
    defaultValues: {
      userCNPJ: "",
      loanValue: LOAN_MIN,
      userReason: "",
      userReasonDescription: "",
      userRestriction: "",
      userNumberEmployees: "",
      userRevenues: "",
      userCosts: "",
      userPatrimony: "",
    },
  });

  useHydrateForm(model?.detalhesPedido, reset);

  const userReason = useWatch({ control, name: "userReason" });

  const onSubmit = (values: DetalhesPedidoForm) => {
    setModel({
      ...(model ?? {}),
      detalhesPedido: {
        ...values,
        userCNPJ: values.userCNPJ.replace(/\D/g, ""),
      },
    });

    next();
    navigate(PATHS.PRIMEIRA_ETAPA.SIMULACAO);
  };

  return (
    <OnboardingFormPage
      title="Legal!"
      subtitle="Agora conta pra gente um pouquinho mais sobre a sua empresa."
      formId="detalhes-form"
      onSubmit={handleSubmit(onSubmit)}
      onBack={() => navigate(PATHS.PRIMEIRA_ETAPA.DADOS_PESSOAIS)}
    >
      <Grid container spacing={3}>

        <Grid size={12}>
          <Controller
            name="userCNPJ"
            control={control}
            render={({ field }) => (
              <PatternFormat
                value={field.value || ""}
                onValueChange={(values) => field.onChange(values.value)}
                format="##.###.###/####-##"
                customInput={TextField}
                fullWidth
                label="CNPJ"
                error={!!errors.userCNPJ}
                helperText={errors.userCNPJ?.message}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Controller
            name="loanValue"
            control={control}
            render={({ field }) => (
              <>
                <Typography gutterBottom>
                  Valor solicitado:{" "}
                  <strong>{formatCurrency(field.value)}</strong>
                </Typography>
                <Slider
                  value={field.value}
                  min={LOAN_MIN}
                  max={LOAN_MAX}
                  step={LOAN_STEP}
                  onChange={(_, v) => field.onChange(v as number)}
                />
                {errors.loanValue && (
                  <FormHelperText error>
                    {errors.loanValue.message}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid size={12}>
          <Typography variant="body2" mb={1}>
            Qual o motivo do empréstimo?
          </Typography>
          <Controller
            name="userReason"
            control={control}
            render={({ field }) => (
              <>
                <RadioGroup {...field}>
                  <FormControlLabel value="Capital de Giro" control={<Radio />} label="Capital de Giro" />
                  <FormControlLabel value="Expansão de Negócio" control={<Radio />} label="Expansão de Negócio" />
                  <FormControlLabel value="Renegociação de Dívidas" control={<Radio />} label="Renegociação de Dívidas" />
                  <FormControlLabel value="Estoque" control={<Radio />} label="Estoque" />
                  <FormControlLabel value="Outros" control={<Radio />} label="Outros" />
                </RadioGroup>
                {errors.userReason && (
                  <FormHelperText error>{errors.userReason.message}</FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        {userReason === "Outros" && (
          <Grid size={12}>
            <Controller
              name="userReasonDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Descreva o motivo"
                  fullWidth
                  error={!!errors.userReasonDescription}
                  helperText={errors.userReasonDescription?.message}
                />
              )}
            />
          </Grid>
        )}

        <Grid size={12}>
          <Typography variant="body2" mb={1}>
            Possui restrições no CPF ou CNPJ?
          </Typography>
          <Controller
            name="userRestriction"
            control={control}
            render={({ field }) => (
              <>
                <RadioGroup {...field}>
                  <FormControlLabel value="Sim, possuo" control={<Radio />} label="Sim, possuo" />
                  <FormControlLabel value="Não possuo" control={<Radio />} label="Não possuo" />
                </RadioGroup>
                {errors.userRestriction && (
                  <FormHelperText error>{errors.userRestriction.message}</FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid size={12}>
          <Typography variant="body2" mb={1}>
            Quantos funcionários sua empresa possui?
          </Typography>
          <Controller
            name="userNumberEmployees"
            control={control}
            render={({ field }) => (
              <>
                <RadioGroup {...field}>
                  <FormControlLabel value="Nenhum" control={<Radio />} label="Nenhum" />
                  <FormControlLabel value="de 1 a 2" control={<Radio />} label="1 a 2" />
                  <FormControlLabel value="de 3 a 5" control={<Radio />} label="3 a 5" />
                  <FormControlLabel value="de 6 a 10" control={<Radio />} label="6 a 10" />
                  <FormControlLabel value="+ de 10" control={<Radio />} label="+ de 10" />
                </RadioGroup>
                {errors.userNumberEmployees && (
                  <FormHelperText error>{errors.userNumberEmployees.message}</FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        <Grid size={12}>
          <Controller
            name="userRevenues"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Faturamento mensal"
                fullWidth
                error={!!errors.userRevenues}
                helperText={errors.userRevenues?.message}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Controller
            name="userCosts"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Custos mensais"
                fullWidth
                error={!!errors.userCosts}
                helperText={errors.userCosts?.message}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Controller
            name="userPatrimony"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Patrimônio (opcional)"
                fullWidth
                error={!!errors.userPatrimony}
                helperText={errors.userPatrimony?.message}
              />
            )}
          />
        </Grid>

      </Grid>
    </OnboardingFormPage>
  );
}