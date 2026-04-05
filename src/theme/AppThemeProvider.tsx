import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, type ReactNode } from "react";
import { themeResolver } from "./themeResolver";
import { createMuiTheme } from "../styles/theme";
import type { AppTheme } from "./theme.types";

type Props = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: Props) {
  const theme = themeResolver();
  const muiTheme = createMuiTheme(theme);
  const metaTheme = document.querySelector("meta[name='theme-color']");

  if (metaTheme) {
    metaTheme.setAttribute("content", theme.primaryColor);
  }

  useEffect(() => {
    applyThemeSideEffects(theme);
  }, [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
}

function applyThemeSideEffects(theme: AppTheme) {
  if (theme.title) {
    document.title = theme.title;
  }

  if (theme.faviconUrl) {
    const existingFavicon = document.querySelector<HTMLLinkElement>(
      "link[rel='icon']"
    );

    if (existingFavicon) {
      existingFavicon.href = theme.faviconUrl;
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = theme.faviconUrl;
      document.head.appendChild(link);
    }
  }
}