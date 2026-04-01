import { Container, Typography, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

import { useOnboardingStore, useOnboardingFlowStore } from "../../../../store";
import {
  personalDataSchema,
  type DadosPessoaisForm,
} from "../schemas/dadosPessoais.schema";
import Footer from "../../../../shared/components/footer/Footer";
import { PATHS } from "../../../../app/router/paths";
import { useHydrateForm } from "../../../../shared/hooks";

export default function DadosPessoaisPage() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();
  const next = useOnboardingFlowStore((s) => s.next);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosPessoaisForm>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      userName: "",
      userCellphone: "",
      userEmail: "",
      userNumberDoc: "",
    },
  });

  useHydrateForm(model?.dadosPessoais, reset);

  const onSubmit = (values: DadosPessoaisForm) => {
    setModel({
      ...(model ?? {}),
      dadosPessoais: {
        ...values,
        userCellphone: values.userCellphone.replace(/\D/g, ""),
        userNumberDoc: values.userNumberDoc.replace(/\D/g, ""),
      },
    });

    next();
    navigate(PATHS.PRIMEIRA_ETAPA.DETALHES_PEDIDO);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mb={2}>
        Olá!
      </Typography>

      <Typography variant="h6" mb={4}>
        Você está precisando de um empréstimo, certo? Vamos lá!
      </Typography>

      <form id="dados-pessoais-form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>

          <Grid size={12}>
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome completo"
                  fullWidth
                  error={!!errors.userName}
                  helperText={errors.userName?.message}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="userCellphone"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  value={field.value || ""}
                  onValueChange={(values) => field.onChange(values.value)}
                  format="(##) #####-####"
                  customInput={TextField}
                  fullWidth
                  label="Celular"
                  error={!!errors.userCellphone}
                  helperText={errors.userCellphone?.message}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="userEmail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="userNumberDoc"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  value={field.value || ""}
                  onValueChange={(values) => field.onChange(values.value)}
                  format="###.###.###-##"
                  customInput={TextField}
                  fullWidth
                  label="CPF"
                  error={!!errors.userNumberDoc}
                  helperText={errors.userNumberDoc?.message}
                />
              )}
            />
          </Grid>

        </Grid>
      </form>

      <Footer rightButton="avancar" rightButtonForm="dados-pessoais-form" />
    </Container>
  );
}