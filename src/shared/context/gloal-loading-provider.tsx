import { useState, type ReactNode } from "react";
import { GlobalLoadingContext } from "./global-loading-context";
import Loading from "../components/loadings/Loading";

type Props = {
  children: ReactNode;
};

export function GlobalLoadingProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <GlobalLoadingContext.Provider
      value={{ isLoading, startLoading, stopLoading }}
    >
      {children}
      <Loading isLoading={isLoading} />
    </GlobalLoadingContext.Provider>
  );
}