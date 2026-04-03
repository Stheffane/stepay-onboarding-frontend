import { z } from "zod";

export const desistenciaSocioSchema = z.object({
  cpf: z
    .string()
    .min(11, "CPF inválido")
    .regex(/^\d{11}$/, "CPF inválido"),
  email: z.string().email("E-mail inválido"),
});

export type DesistenciaSocioForm = z.infer<typeof desistenciaSocioSchema>;