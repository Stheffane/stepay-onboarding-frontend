import { type RouteObject } from "react-router-dom"
import { PATHS } from "../paths"

export const segundaEtapaRoutes: RouteObject[] = [
  {
    path: PATHS.SEGUNDA_ETAPA.IDENTIFICACAO,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/Identificacao").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.IDENTIFICACAO_SOCIOS,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/IdentificacaoMaisSocios").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.FLUXO_SOCIO,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/FluxoSocio").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.CONCLUSAO_NAO_SOCIO,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/ConclusaoNaoSocio").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIO,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/proximos-passos/Socio").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIOS,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/proximos-passos/Socios").then(m => ({ Component: m.default }))
  },

  {
    path: PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.FORA_QUADRO,
    lazy: () => import("../../../features/onboarding/segunda-etapa/pages/proximos-passos/ForaQuadro").then(m => ({ Component: m.default }))
  }
]
