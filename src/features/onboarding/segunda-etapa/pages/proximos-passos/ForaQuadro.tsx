import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../../app/router/paths";
import { ProximosPassosBase, type Etapa } from "../../components";

const ETAPAS: Etapa[] = [
  {
    label: "Etapa 1",
    descricao: "Validação do(s) sócio(s)",
    status: "pendente",
  },
  {
    label: "Etapa 2",
    descricao: "Captura do documento e foto do(s) sócio(s)",
    status: "pendente",
  },
  {
    label: "Etapa 3",
    descricao: "Confirmação dos seus dados",
    status: "pendente",
  },
];

export default function ProximosPassosForaQuadroPage() {
  const navigate = useNavigate();

  return (
    <ProximosPassosBase
      etapas={ETAPAS}
      onBack={() => navigate(PATHS.PRIMEIRA_ETAPA.SIMULACAO)}
      onNext={() => navigate(PATHS.SEGUNDA_ETAPA.IDENTIFICACAO)}
    />
  );
}