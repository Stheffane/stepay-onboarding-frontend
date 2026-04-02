import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../app/router/paths";

type MotorDesfecho = "aprovado" | "analise-manual" | "negado" | "90-dias";

function getMockDesfecho(cnpj: string): MotorDesfecho {
  const lastDigit = Number(cnpj.at(-1));

  if (lastDigit === 0) return "90-dias";
  if (lastDigit <= 3) return "aprovado";
  if (lastDigit <= 6) return "analise-manual";
  return "negado";
}

export function useMockMotorCredito() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show90DiasModal, setShow90DiasModal] = useState(false);

  const executar = useCallback(
    async (cnpj: string) => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const desfecho = getMockDesfecho(cnpj);

      setLoading(false);

      switch (desfecho) {
        case "aprovado":
          navigate(PATHS.PRIMEIRA_ETAPA.CONFIRMACAO);
          break;
        case "analise-manual":
          navigate(PATHS.PRIMEIRA_ETAPA.ANALISE_MANUAL);
          break;
        case "negado":
          navigate(PATHS.PRIMEIRA_ETAPA.PEDIDO_NEGADO);
          break;
        case "90-dias":
          setShow90DiasModal(true);
          break;
      }
    },
    [navigate]
  );

  return { executar, loading, show90DiasModal, setShow90DiasModal };
}