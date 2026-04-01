import type { DadosPessoaisForm, DetalhesPedidoForm } from "../../features/onboarding/primeira-etapa/schemas";

export interface DadosModel {
  id?: string;
  etapaAtual?: number;

  // campos de dados pessoais
  dadosPessoais?: DadosPessoaisForm;

  // campos de detalhes do pedido
  detalhesPedido?: DetalhesPedidoForm;

  // campos de simulação
  simulatedParcelas?: number;
}