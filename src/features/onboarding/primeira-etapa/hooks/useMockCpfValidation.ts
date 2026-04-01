import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../../../../store";
import { PATHS } from "../../../../app/router/paths";
import type { DadosPessoaisForm } from "../schemas";

type CpfScenario = "fora-quadro" | "socio-unico" | "varios-socios";

function getMockScenario(cpf: string): CpfScenario {
  const lastDigit = Number(cpf.at(-1));

  if (lastDigit === 0) return "varios-socios";

  const sum = cpf.split("").reduce((acc, d) => acc + Number(d), 0);
  return sum % 2 === 0 ? "socio-unico" : "fora-quadro";
}

export function useMockCpfValidation() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();
  const [loading, setLoading] = useState(false);

  const validate = useCallback(
    async (cpf: string) => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1200)); // simula latência de API

      const scenario = getMockScenario(cpf);

      setModel({
        ...(model ?? {}),
        dadosPessoais: {
          ...(model?.dadosPessoais as DadosPessoaisForm ?? {}),
          userNumberDoc: cpf,
        },
      });

      setLoading(false);

      switch (scenario) {
        case "fora-quadro":
          navigate(PATHS.SEGUNDA_ETAPA.IDENTIFICACAO);
          break;
        case "socio-unico":
          navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIO);
          break;
        case "varios-socios":
          navigate(PATHS.SEGUNDA_ETAPA.IDENTIFICACAO_SOCIOS);
          break;
      }
    },
    [model, setModel, navigate]
  );

  return { validate, loading };
}