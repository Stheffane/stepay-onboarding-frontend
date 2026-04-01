import { z } from "zod";

export const personalDataSchema = z.object({
  userName: z.string().min(3, "Nome muito curto"),
  userCellphone: z.string().min(10, "Telefone inválido"),
  userEmail: z.string().email("E-mail inválido"),
  userNumberDoc: z.string().min(11, "CPF inválido"),
});

export type DadosPessoaisForm = z.infer<typeof personalDataSchema>;