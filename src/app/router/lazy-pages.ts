// Lazy Loading
import { lazy } from "react"

/**
 * Primeira etapa do onboarding
 */
export const DadosPessoaisPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/DadosPessoais")
)

export const DetalhesPedidoPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/DetalhesPedido")
)

export const SimulacaoPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/Simulacao")
)

export const ConsultaMotorPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/ConsultaMotor")
)

export const AnaliseManualPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/AnaliseManual")
)

export const ConfirmacaoPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/Confirmacao")
)

export const PedidoNegadoPage = lazy(() =>
  import("../../features/onboarding/primeira-etapa/pages/PedidoNegado")
)

/**
 * Segunda etapa do onboarding
 */

export const IdentificacaoPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/Identificacao")
)

export const IdentificacaoMaisSociosPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/IdentificacaoMaisSocios")
)

export const FluxoSocioPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/FluxoSocio")
)

export const ConclusaoNaoSocioPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/ConclusaoNaoSocio")
)

export const SocioPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/proximos-passos/Socio")
)

export const SociosPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/proximos-passos/Socios")
)

export const ForaQuadroPage = lazy(() =>
  import("../../features/onboarding/segunda-etapa/pages/proximos-passos/ForaQuadro")
)

/**
 * Terceira etapa do onboarding
 */
export const DocumentosPage = lazy(() =>
  import("../../features/onboarding/terceira-etapa/pages/Documentos")
)

export const CriarSenhaPage = lazy(() =>
  import("../../features/onboarding/terceira-etapa/pages/CriarSenha")
)

export const SolicitacaoConcluida3etapaPage = lazy(() =>
  import("../../features/onboarding/terceira-etapa/pages/SolicitacaoConcluida")
)

export const DesistenciaPropostaPage = lazy(() =>
  import("../../features/onboarding/terceira-etapa/pages/DesistenciaProposta")
)

export const DesistenciaSocioPage = lazy(() =>
  import("../../features/onboarding/terceira-etapa/pages/DesistenciaSocio")
)

/**
 * Quarta etapa do onboarding
 */
export const Confirmacao4etapaPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/Confirmacao")
)

export const ConclusaoSolicitacaoPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/ConclusaoSolicitacao")
)

export const VisualizacaoSolicitacaoPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/VisualizacaoSolicitacao")
)

export const PedidoExpiradoPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/PedidoExpirado")
)

export const PedidoCanceladoPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/PedidoCancelado")
)

export const SolicitacaoConcluida4etapaPage = lazy(() =>
  import("../../features/onboarding/quarta-etapa/pages/SolicitacaoConcluida")
)
