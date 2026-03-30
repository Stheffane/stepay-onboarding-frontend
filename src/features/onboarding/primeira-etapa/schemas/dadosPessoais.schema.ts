import { z } from "zod";

export const personalDataSchema = z.object({
  userName: z
    .string()
    .min(3, "Informe seu nome completo")
    .regex(/^\s*\S+(\s+\S+)+\s*$/, "Informe nome completo"),

  userCellphone: z
    .string()
    .min(10, "Telefone inválido"),

  userEmail: z
    .string()
    .email("Email inválido"),

  userNumberDoc: z
    .string()
    .min(11, "CPF inválido"),
});

export type PersonalDataForm = z.infer<typeof personalDataSchema>;