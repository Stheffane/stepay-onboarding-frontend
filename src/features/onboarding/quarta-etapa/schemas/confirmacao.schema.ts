import { z } from "zod";

export const confirmacaoPropostaSchema = z.object({
  banco: z.string().min(1, "Selecione um banco"),
  agencia: z.string().min(4, "Agência inválida"),
  conta: z.string().min(5, "Conta inválida"),
  tipoConta: z.enum(["Conta Corrente", "Poupança"], {
    errorMap: () => ({ message: "Selecione o tipo de conta" }),
  }),
  senha: z.string().min(1, "Informe a senha"),
});

export type ConfirmacaoPropostaForm = z.infer<typeof confirmacaoPropostaSchema>;