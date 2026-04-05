import type {
  DadosPessoaisForm,
  DetalhesPedidoForm,
  SimulacaoForm,
  ConfirmacaoForm
} from "../../features/onboarding/primeira-etapa/schemas";

export interface DadosBancariosModel {
  banco?: string;
  codigoBanco?: string;
  agencia?: string;
  conta?: string;
  tipoConta?: "Conta Corrente" | "Poupança";
}

export interface DadosModel {
  id?: string;
  etapaAtual?: number;
  whatsappEnviado?: boolean;

  dadosPessoais?: DadosPessoaisForm;
  detalhesPedido?: DetalhesPedidoForm;
  simulacao?: SimulacaoForm;
  confirmacao?: ConfirmacaoForm;
  dadosBancarios?: DadosBancariosNModel;
}