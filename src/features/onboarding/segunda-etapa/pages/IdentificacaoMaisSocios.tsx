import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../app/router/paths";
import { IdentificacaoBase } from "../components/IdentificationOfMorePartners";

export default function IdentificacaoMaisSociosPage() {
  const navigate = useNavigate();

  return (
    <IdentificacaoBase
      title="Identificamos que sua empresa possui mais sócios no quadro societário."
      subtitle="Envie o link para seu(s) sócio(s) realizar a confirmação de dados."
      onBack={() => navigate(-1)}
      onNext={() => navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIOS)}
    />
  );
}