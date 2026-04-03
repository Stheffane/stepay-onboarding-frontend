import { useNavigate } from "react-router-dom";
import { ProximosPassosBase, type Etapa } from "../../components";
import { PATHS } from "../../../../../app/router/paths";
import { useOnboardingStore } from "../../../../../store";

export default function ProximosPassosSociosPage() {
  const navigate = useNavigate();
  const { model } = useOnboardingStore();

  const whatsappEnviado = model?.whatsappEnviado ?? false;

  const ETAPAS: Etapa[] = [
    {
      label: "Etapa 1",
      descricao: "Validação do(s) sócio(s)",
      status: whatsappEnviado ? "concluido" : "pendente",
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

  return (
    <ProximosPassosBase
      etapas={ETAPAS}
      onBack={() => navigate(PATHS.PRIMEIRA_ETAPA.SIMULACAO)}
      onNext={() => navigate(PATHS.TERCEIRA_ETAPA.DOCUMENTOS)}
    />
  );
}