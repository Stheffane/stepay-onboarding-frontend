import { useNavigate } from "react-router-dom";
import { ProximosPassosBase, type Etapa } from "../../components";
import { PATHS } from "../../../../../app/router/paths";

const ETAPAS: Etapa[] = [
  {
    label: "Etapa 1",
    descricao: "Captura do documento e foto do(s) sócio(s)",
    status: "pendente",
  },
  {
    label: "Etapa 2",
    descricao: "Confirmação dos seus dados",
    status: "pendente",
  },
];

export default function ProximosPassosSocioPage() {
  const navigate = useNavigate();

  return (
    <ProximosPassosBase
      etapas={ETAPAS}
      onBack={() => navigate(PATHS.PRIMEIRA_ETAPA.SIMULACAO)}
      onNext={() => navigate(PATHS.TERCEIRA_ETAPA.DOCUMENTOS)}
    />
  );
}