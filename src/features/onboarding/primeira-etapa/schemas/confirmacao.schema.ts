import { z } from "zod";

export const confirmacaoSchema = z.object({
  checkTermos: z.boolean().refine((v) => v === true, {
    message: "Você precisa autorizar o acesso às informações.",
  }),
  checkConsultas: z.boolean().refine((v) => v === true, {
    message: "Você precisa concordar com os termos e política de privacidade.",
  }),
  checkWhatsapp: z.boolean().optional(),
});

export type ConfirmacaoForm = z.infer<typeof confirmacaoSchema>;