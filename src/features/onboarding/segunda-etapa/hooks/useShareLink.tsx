import { useMemo } from "react";
import { useOnboardingStore } from "../../../../store";

export function useShareLink() {
  const { model } = useOnboardingStore();
  const id = model?.id ?? "mock-id-123";

  const link = useMemo(() => {
    const base = window.location.origin;
    return `${base}/fluxo-socio?id=${id}#${model?.simulacao?.simulatedParcelas}&${model?.simulacao?.simulatedValue}`;
  }, [id, model?.simulacao]);

  const copyLink = () => {
    navigator.clipboard.writeText(link);
  };

  return { link, copyLink };
}