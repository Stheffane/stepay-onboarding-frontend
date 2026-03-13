import { create } from "zustand";
import { WhitelabelThemeModel } from "../shared/models";

type ThemeState = {
  currentTheme: WhitelabelThemeModel;

  setTheme: (theme: WhitelabelThemeModel) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: new WhitelabelThemeModel(),

  setTheme: (theme) => set({ currentTheme: theme }),
}));