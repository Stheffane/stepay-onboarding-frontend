import { z } from "zod";

export const whatsappSchema = z.object({
  phone: z
    .string()
    .min(10, "Telefone inválido")
  // .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Formato inválido"),
});

export type WhatsappFormData = z.infer<typeof whatsappSchema>;