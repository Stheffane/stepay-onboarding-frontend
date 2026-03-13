import { create } from "zustand";

type HeaderState = {
  etapa: number;
  step: number;
  fontSizeMultiplier: number;
  visibility: boolean;
  visibilityLetterSize: boolean;

  setEtapa: (etapa: number) => void;
  setStep: (step: number) => void;
  setFontSizeMultiplier: (value: number) => void;
  setVisibility: (visible: boolean) => void;
  setVisibilityLetterSize: (visible: boolean) => void;
};

export const useHeaderStore = create<HeaderState>((set) => ({
  etapa: 1,
  step: 0,
  fontSizeMultiplier: 1,
  visibility: true,
  visibilityLetterSize: true,

  setEtapa: (etapa) => set({ etapa }),
  setStep: (step) => set({ step }),
  setFontSizeMultiplier: (fontSizeMultiplier) =>
    set({ fontSizeMultiplier }),
  setVisibility: (visibility) => set({ visibility }),
  setVisibilityLetterSize: (visibilityLetterSize) =>
    set({ visibilityLetterSize }),
}));