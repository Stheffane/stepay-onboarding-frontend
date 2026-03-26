import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DadosModel } from "../shared/models";
import { createEncryptedStorage } from "../shared/utils/encrypted-storage";

type OnboardingState = {
  model?: DadosModel;

  setModel: (model: DadosModel) => void;
  clearModel: () => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      model: undefined,

      setModel: (model) => set({ model }),

      clearModel: () => set({ model: undefined }),
    }),
    {
      name: "onboarding-storage",

      storage: createJSONStorage(() =>
        createEncryptedStorage(localStorage)
      ),
    }
  )
);