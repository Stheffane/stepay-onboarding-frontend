import { type RouteObject } from "react-router-dom"
import { PATHS } from "../paths"

export const primeiraEtapaRoutes: RouteObject[] = [
  {
    path: PATHS.PRIMEIRA_ETAPA.DADOS_PESSOAIS,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/DadosPessoais").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.DETALHES_PEDIDO,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/DetalhesPedido").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.SIMULACAO,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/Simulacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.CONSULTA_MOTOR,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/ConsultaMotor").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.ANALISE_MANUAL,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/AnaliseManual").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.CONFIRMACAO,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/Confirmacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.PRIMEIRA_ETAPA.PEDIDO_NEGADO,
    lazy: () => import("../../../features/onboarding/primeira-etapa/pages/PedidoNegado").then(m => ({ Component: m.default }))
  }
]
