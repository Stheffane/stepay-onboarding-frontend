import {
  Container,
  Typography,
  TextField,
  Grid
} from "@mui/material";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";

import { useOnboardingFlowStore, useOnboardingStore } from "../../../../store";

import {
  personalDataSchema,
  type PersonalDataForm
} from "../schemas/dadosPessoais.schema";

import Footer from "../../../../shared/components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../app/router/paths";

export default function DadosPessoaisPage() {
  const { setModel, model } = useOnboardingStore();
  const next = useOnboardingFlowStore((s) => s.next);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalDataForm>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: model as PersonalDataForm,
  });

  // hidrata quando voltar de etapa
  useEffect(() => {
    if (model) {
      reset(model as PersonalDataForm);
    }
  }, [model, reset]);

  const onSubmit = (values: PersonalDataForm) => {
    const cleaned = {
      ...values,
      userCellphone: values.userCellphone?.replace(/\D/g, ""),
      userNumberDoc: values.userNumberDoc?.replace(/\D/g, ""),
    };

    setModel({
      ...(model ?? {}),
      ...cleaned,
    });


    next(); // estado do fluxo -zustand
    navigate(PATHS.PRIMEIRA_ETAPA.DETALHES_PEDIDO); // rota
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

          {/* Nome */}
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

          {/* Telefone */}
          <Grid size={12}>
            <Controller
              name="userCellphone"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  value={field.value || ""}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
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

          {/* Email */}
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

          {/* CPF */}
          <Grid size={12}>
            <Controller
              name="userNumberDoc"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  value={field.value || ""}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
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

      <Footer rightButton={"avancar"} rightButtonForm="dados-pessoais-form" />
    </Container>
  );
}