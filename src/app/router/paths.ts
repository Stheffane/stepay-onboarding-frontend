/**
 * Centralização das rotas da aplicação.
 *
 * Benefícios:
 * - Evita strings espalhadas pelo código
 * - Facilita refatorações de URL
 * - Permite navegação tipada
 *
 * Exemplo de uso:
 * navigate(PATHS.PRIMEIRA_ETAPA.SIMULACAO)
 */

export const PATHS = {

  PRIMEIRA_ETAPA: {
    DADOS_PESSOAIS: "/primeira-etapa/dados-pessoais",
    DETALHES_PEDIDO: "/primeira-etapa/detalhes-pedido",
    SIMULACAO: "/primeira-etapa/simulacao",
    CONSULTA_MOTOR: "/primeira-etapa/consulta-motor",
    ANALISE_MANUAL: "/primeira-etapa/analise-manual",
    CONFIRMACAO: "/primeira-etapa/confirmacao",
    PEDIDO_NEGADO: "/primeira-etapa/pedido-negado",
    SOLICITAR_CPF: "/primeira-etapa/solicitar-cpf"
  },

  SEGUNDA_ETAPA: {
    IDENTIFICACAO: "/segunda-etapa/identificacao",
    IDENTIFICACAO_SOCIOS: "/segunda-etapa/identificacao-mais-socios",
    FLUXO_SOCIO: "/segunda-etapa/fluxo-socio",
    CONCLUSAO_NAO_SOCIO: "/segunda-etapa/conclusao-nao-socio",
    PROXIMOS_PASSOS: {
      FORA_QUADRO: "/segunda-etapa/proximos-passos/fora-quadro",
      SOCIO: "/segunda-etapa/proximos-passos/socio",
      SOCIOS: "/segunda-etapa/proximos-passos/socios"
    }
  },

  TERCEIRA_ETAPA: {
    DOCUMENTOS: "/terceira-etapa/documentos",
    CRIAR_SENHA: "/terceira-etapa/criar-senha",
    SOLICITACAO_CONCLUIDA: "/terceira-etapa/solicitacao-concluida",
    DESISTENCIA_PROPOSTA: "/terceira-etapa/desistencia-proposta",
    DESISTENCIA_SOCIO: "/terceira-etapa/desistencia-socio"
  },

  QUARTA_ETAPA: {
    CONFIRMACAO: "/quarta-etapa/confirmacao",
    CONCLUSAO: "/quarta-etapa/conclusao-solicitacao",
    VISUALIZACAO: "/quarta-etapa/visualizacao-solicitacao",
    SOLICITACAO_CONCLUIDA: "/quarta-etapa/solicitacao-concluida",
    PEDIDO_CANCELADO: "/quarta-etapa/pedido-cancelado",
    PEDIDO_EXPIRADO: "/quarta-etapa/pedido-expirado",
    DESISTENCIA: "/quarta-etapa/desistencia-solicitacao"
  },

  SISTEMA: {
    ERRO: "/error",
    PAGINA_NAO_ENCONTRADA: "/not-found",
    REDIRECIONAMENTO: "/redirect"
  }

} as const