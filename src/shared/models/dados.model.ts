import type {
  DadosPessoaisForm,
  DetalhesPedidoForm,
  SimulacaoForm,
  ConfirmacaoForm
} from "../../features/onboarding/primeira-etapa/schemas";
export interface DadosModel {
  id?: string;
  etapaAtual?: number;

  dadosPessoais?: DadosPessoaisForm;
  detalhesPedido?: DetalhesPedidoForm;
  simulacao?: SimulacaoForm;
  confirmacao?: ConfirmacaoForm;

  whatsappEnviado?: boolean;
}