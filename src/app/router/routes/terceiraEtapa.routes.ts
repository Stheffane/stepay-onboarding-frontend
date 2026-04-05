import { type RouteObject } from "react-router-dom"
import { PATHS } from "../paths"

export const terceiraEtapaRoutes: RouteObject[] = [
  {
    path: PATHS.TERCEIRA_ETAPA.DOCUMENTOS,
    lazy: () => import("../../../features/onboarding/terceira-etapa/pages/Documentos").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.TERCEIRA_ETAPA.CRIAR_SENHA,
    lazy: () => import("../../../features/onboarding/terceira-etapa/pages/CriarSenha").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.TERCEIRA_ETAPA.SOLICITACAO_PROXIMOS_PASSOS,
    lazy: () => import("../../../features/onboarding/terceira-etapa/pages/SolicitacaoProximosPassos").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.TERCEIRA_ETAPA.DESISTENCIA_PROPOSTA,
    lazy: () => import("../../../features/onboarding/terceira-etapa/pages/DesistenciaProposta").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.TERCEIRA_ETAPA.DESISTENCIA_SOCIO,
    lazy: () => import("../../../features/onboarding/terceira-etapa/pages/DesistenciaSocio").then(m => ({ Component: m.default }))
  }
]
