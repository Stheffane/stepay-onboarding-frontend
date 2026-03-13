import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { PlanosDePagamento } from "../shared/models";

type SimulationState = {
  model?: PlanosDePagamento;

  setModel: (model: PlanosDePagamento) => void;
  clearModel: () => void;
};

export const useSimulationStore = create<SimulationState>()(
  persist(
    (set) => ({
      model: undefined,

      setModel: (model) => set({ model }),

      clearModel: () => set({ model: undefined }),
    }),
    {
      name: "simulation-storage",

      storage: createJSONStorage(() => sessionStorage),
      // com criptografia ficaria:
      // storage: createJSONStorage(() =>
      //   createEncryptedStorage(sessionStorage)
      // )
    }
  )
);