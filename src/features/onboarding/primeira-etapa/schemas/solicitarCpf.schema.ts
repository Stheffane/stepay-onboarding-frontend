import { z } from "zod";

export const solicitarCpfSchema = z.object({
  cpf: z
    .string()
    .min(11, "CPF inválido")
    .regex(/^\d{11}$/, "CPF inválido"),
});

export type SolicitarCpfForm = z.infer<typeof solicitarCpfSchema>;