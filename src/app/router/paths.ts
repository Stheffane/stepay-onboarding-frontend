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
    DADOS_PESSOAIS: "/",
    DETALHES_PEDIDO: "/detalhes-pedido",
    SIMULACAO: "/simulacao",
    CONSULTA_MOTOR: "/consulta-motor",
    ANALISE_MANUAL: "/analise-manual",
    CONFIRMACAO: "/confirmacao",
    PEDIDO_NEGADO: "/pedido-negado",
    SOLICITAR_CPF: "/solicitar-cpf"
  },

  SEGUNDA_ETAPA: {
    IDENTIFICACAO: "/identificacao",
    IDENTIFICACAO_SOCIOS: "/identificacao-mais-socios",
    FLUXO_SOCIO: "/fluxo-socio",
    CONCLUSAO_NAO_SOCIO: "/conclusao-nao-socio",
    PROXIMOS_PASSOS: {
      FORA_QUADRO: "/proximos-passos/fora-quadro",
      SOCIO: "/proximos-passos/socio",
      SOCIOS: "/proximos-passos/socios"
    }
  },

  TERCEIRA_ETAPA: {
    DOCUMENTOS: "/documentos",
    CRIAR_SENHA: "/criar-senha",
    SOLICITACAO_PROXIMOS_PASSOS: "/solicitacao-proximos-passos",
    DESISTENCIA_PROPOSTA: "/desistencia-proposta",
    DESISTENCIA_SOCIO: "/desistencia-socio"
  },

  QUARTA_ETAPA: {
    EFETIVACAO: "/efetivacao",
    CONCLUSAO: "/conclusao-solicitacao",
    VISUALIZACAO: "/visualizacao-solicitacao",
    SOLICITACAO_CONCLUIDA: "/solicitacao-concluida",
    PEDIDO_CANCELADO: "/pedido-cancelado",
    PEDIDO_EXPIRADO: "/pedido-expirado",
    DESISTENCIA: "/desistencia-solicitacao"
  },

  SISTEMA: {
    ERRO: "/error",
    PAGINA_NAO_ENCONTRADA: "/not-found",
    REDIRECIONAMENTO: "/redirect"
  }

} as const