import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";

import { DesistenciaBase } from "../components/DesistenciaBase";
import {
  desistenciaSocioSchema,
  type DesistenciaSocioForm,
} from "../schemas/desistenciaSocio.schema";

const MOTIVOS = [
  { value: "Juros muito alto", label: "Juros muito alto" },
  { value: "Não faço parte do quadro societário", label: "Não faço parte do quadro societário" },
  { value: "Não estou de acordo com o empréstimo", label: "Não estou de acordo com o empréstimo" },
  { value: "Desisti do empréstimo", label: "Desisti do empréstimo" },
  { value: "Outros", label: "Outros" },
];

export default function DesistenciaSocioPage() {
  const {
    control,
    formState: { errors },
  } = useForm<DesistenciaSocioForm>({
    resolver: zodResolver(desistenciaSocioSchema),
    defaultValues: { cpf: "", email: "" },
  });

  const handleConfirm = (motivo: string, motivoCustomizado: string) => {
    // TODO: integrar com API de feedback do sócio
    console.info("Desistência sócio:", motivo, motivoCustomizado);
  };

  const extraFields = (
    <>
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
            label="CPF para confirmar desistência"
            inputMode="numeric"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            sx={{ mb: 2 }}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="E-mail"
            fullWidth
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />
        )}
      />
    </>
  );

  return (
    <DesistenciaBase
      title="Conte pra nós por que você não está de acordo"
      subtitle="Selecione abaixo o motivo de você não estar de acordo:"
      motivos={MOTIVOS}
      extraFields={extraFields}
      onConfirm={handleConfirm}
    />
  );
}