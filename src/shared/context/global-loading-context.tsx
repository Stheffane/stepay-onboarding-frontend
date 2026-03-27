import { createContext } from "react";

export type GlobalLoadingContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const GlobalLoadingContext =
  createContext<GlobalLoadingContextType | undefined>(undefined);