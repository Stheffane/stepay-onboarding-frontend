import { themes, type ThemeKey } from "./themes";

const STORAGE_KEY = "app-theme";

function isThemeKey(key: string): key is ThemeKey {
  return key in themes
};

export function themeResolver() {
  // -> querystring ex:(?client=clientA)
  const params = new URLSearchParams(window.location.search);
  const queryClient = params.get("client");

  if (queryClient && isThemeKey(queryClient)) {
    localStorage.setItem(STORAGE_KEY, queryClient);
    return themes[queryClient];
  }

  // -> localStorage ex:(localStorage.setItem("app-theme", "clientB"); location.reload())
  const storedClient = localStorage.getItem(STORAGE_KEY);

  if (storedClient && isThemeKey(storedClient)) {
    return themes[storedClient];
  }

  // -> env (Vite / build config) ex:(VITE_CLIENT=clientC)
  const envClient = import.meta.env.VITE_CLIENT;

  if (envClient && isThemeKey(envClient)) {
    return themes[envClient];
  }

  // -> hostname ex:(clientA.mydomain.com || mydomain.com/clientB)
  const hostname = window.location.hostname.toLowerCase();

  if (hostname.includes("clienta")) return themes.clientA;
  if (hostname.includes("clientb")) return themes.clientB;
  if (hostname.includes("clientc")) return themes.clientC;


  return themes.default;
}