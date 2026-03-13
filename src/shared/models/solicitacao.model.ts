export interface PlanoPagamento {
  id: string;

  valorParcela: number;

  quantidadeParcelas: number;

  taxaJuros: number;

  valorTotal: number;
}

export interface PlanosDePagamento {
  planos: PlanoPagamento[];

  valorSolicitado: number;

  melhorPlano?: PlanoPagamento;
}