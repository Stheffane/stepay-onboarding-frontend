import { z } from "zod";

export const detalhesPedidoSchema = z.object({
  userCNPJ: z.string().min(14, "CNPJ inválido"),
  loanValue: z
    .number({ message: "Selecione um valor" })
    .min(10000, "Valor mínimo é R$ 10.000"),
  userReason: z.string().min(1, "Selecione um motivo"),
  userReasonDescription: z.string().optional(),
  userRestriction: z.string().min(1, "Selecione uma opção"),
  userNumberEmployees: z.string().min(1, "Selecione uma opção"),
  userRevenues: z.string().min(1, "Informe o faturamento"),
  userCosts: z.string().min(1, "Informe os custos"),
  userPatrimony: z.string().optional(),
});

export type DetalhesPedidoForm = z.infer<typeof detalhesPedidoSchema>;