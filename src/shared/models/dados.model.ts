import type { DadosPessoaisForm, DetalhesPedidoForm } from "../../features/onboarding/primeira-etapa/schemas";
import type { SimulacaoForm } from "../../features/onboarding/primeira-etapa/schemas/simulacao.schema";

export interface DadosModel {
  id?: string;
  etapaAtual?: number;

  dadosPessoais?: DadosPessoaisForm;
  detalhesPedido?: DetalhesPedidoForm;
  simulacao?: SimulacaoForm;
}