export interface DadosModel {
  id?: string;

  cpf?: string;
  nome?: string;
  email?: string;
  telefone?: string;

  valorSolicitado?: number;
  prazo?: number;

  empresa?: string;
  cnpj?: string;

  etapaAtual?: number;
}