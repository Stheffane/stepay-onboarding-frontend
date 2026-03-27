import { useContext } from "react";
import { GlobalLoadingContext } from "../context/global-loading-context";

export function useGlobalLoading() {
  const context = useContext(GlobalLoadingContext);

  if (!context) {
    throw new Error(
      "useGlobalLoading must be used within GlobalLoadingProvider"
    );
  }

  return context;
}