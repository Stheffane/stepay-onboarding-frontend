import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../app/router/paths";
import { IdentificacaoBase } from "../components/IdentificationOfMorePartners";

export default function IdentificacaoPage() {
  const navigate = useNavigate();

  return (
    <IdentificacaoBase
      title="Oops! Identificamos que você não faz parte do quadro societário!"
      subtitle="Envie o link para seu sócio continuar o processo. Assim que recebermos, você será avisado para continuar."
      onBack={() => navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.FORA_QUADRO)}
      onNext={() => navigate(PATHS.SEGUNDA_ETAPA.CONCLUSAO_NAO_SOCIO)}
    />
  );
}