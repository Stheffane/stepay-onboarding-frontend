import { z } from "zod";

export const simulacaoSchema = z.object({
  simulatedValue: z.number().min(10000),
  simulatedParcelas: z.number().min(6).max(24),
});

export type SimulacaoForm = z.infer<typeof simulacaoSchema>;