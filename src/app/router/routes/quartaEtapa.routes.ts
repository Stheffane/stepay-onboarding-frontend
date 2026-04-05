import { type RouteObject } from "react-router-dom"
import { PATHS } from "../paths"

export const quartaEtapaRoutes: RouteObject[] = [
  {
    path: PATHS.QUARTA_ETAPA.EFETIVACAO,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/efetivacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.QUARTA_ETAPA.CONCLUSAO,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/ConclusaoSolicitacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.QUARTA_ETAPA.VISUALIZACAO,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/VisualizacaoSolicitacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.QUARTA_ETAPA.PEDIDO_EXPIRADO,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/PedidoExpirado").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.QUARTA_ETAPA.PEDIDO_CANCELADO,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/PedidoCancelado").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.QUARTA_ETAPA.SOLICITACAO_CONCLUIDA,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/SolicitacaoConcluida").then(m => ({ Component: m.default }))
  },
  {
    path: PATHS.QUARTA_ETAPA.DESISTENCIA,
    lazy: () => import("../../../features/onboarding/quarta-etapa/pages/DesistenciaProposta").then(m => ({ Component: m.default }))
  }
]
