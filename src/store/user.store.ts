import { create } from "zustand";

type UserState = {
  tokenUsuario?: string;

  setTokenUsuario: (token: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
  tokenUsuario: undefined,

  setTokenUsuario: (tokenUsuario) => set({ tokenUsuario }),
}));