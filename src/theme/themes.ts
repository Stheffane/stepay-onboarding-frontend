import { type AppTheme } from "./theme.types";

export const themes = {
  default: {
    id: "13",
    name: "default",
    title: "Stepay | Empréstimo Empresarial - Faça seu pedido",
    logoUrl:
      "https://www.iobsimuladortributario.com.br/skins/coreonline/imagens/logo-iob.svg",
    hideSubtitle: false,
    faviconUrl: "/favicon.ico",

    menuColor: "#003349",

    primaryColor: "#A42355",
    secondaryColor: "#003349",
    tertiaryColor: "#003349",

    formItemFontSize: 16,

    fontSizeButtonColor: "#A42355",
    fontSizeButtonFontColor: "#FFFFFF",
  },

  clientA: {
    id: "2",
    name: "clientA",
    title: "ClientA powered by Stepay | Pedido de Empréstimo",
    hideSubtitle: false,

    logoUrl: "/images/whitelabel-logos/comgas.svg",
    faviconUrl: "https://www.comgas.com.br/wp-content/themes/comgas/favicon.ico",

    menuColor: "#1B7AA6",

    primaryColor: "#1B7AA6",
    secondaryColor: "#7FD35F",
    tertiaryColor: "#7FD35F",

    formItemFontSize: 16,

    fontSizeButtonColor: "#79D369",
    fontSizeButtonFontColor: "#FFFFFF",
  },

  clientB: {
    id: "4",
    name: "clientB",
    title: "ClientB powered by Stepay | Pedido de Empréstimo",
    hideSubtitle: false,

    logoUrl: "/images/whitelabel-logos/marketup.svg",
    faviconUrl:
      "https://marketup.com/wp-content/uploads/2020/12/cropped-mup-icon_Prancheta-1-32x32.png",

    menuColor: "#000000",

    primaryColor: "#000000",
    secondaryColor: "#8CC63F",
    tertiaryColor: "#8CC63F",

    formItemFontSize: 16,

    fontSizeButtonColor: "#8CC63F",
    fontSizeButtonFontColor: "#FFFFFF",
  },

  clientC: {
    id: "8",
    name: "clientC",
    title: "ClientC powered by Stepay | Pedido de Empréstimo",
    hideSubtitle: true,
    logoUrl: "/images/whitelabel-logos/letsbank.svg",
    faviconUrl:
      "https://global-uploads.webflow.com/6070c3714624182884b6a162/610aa9c418c86bf1e4cd2bb9_favi.png",

    menuColor: "#000000",

    primaryColor: "#40e9ff",
    secondaryColor: "#B2F44A",
    tertiaryColor: "#FF85E8",

    formItemFontSize: 16,

    fontSizeButtonColor: "#FF85E8",
    fontSizeButtonFontColor: "#FFFFFF",
  },
} satisfies Record<string, AppTheme>;

export type ThemeKey = keyof typeof themes