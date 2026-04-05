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

    menuColor: "#1B7AA6",

    primaryColor: "#fc8c38",
    secondaryColor: "#1B7AA6",
    tertiaryColor: "#1B7AA6",

    formItemFontSize: 16,

    buttonColor: "#fc8c38",
    buttonFontColor: "#FFFFFF",
  },

  clientA: {
    id: "2",
    name: "clientA",
    title: "ClientA powered by Stepay | Pedido de Empréstimo",
    hideSubtitle: false,

    logoUrl: "/images/whitelabel-logos/comgas.svg",
    faviconUrl: "https://www.comgas.com.br/wp-content/themes/comgas/favicon.ico",

    menuColor: "#000000",

    primaryColor: "#830AD1",
    secondaryColor: "#85ff9c",
    tertiaryColor: "#00ffff",

    formItemFontSize: 16,

    buttonColor: "#830AD1",
    buttonFontColor: "#FFFFFF",
  },

  clientB: {
    id: "4",
    name: "clientB",
    title: "ClientB powered by Stepay | Pedido de Empréstimo",
    hideSubtitle: false,

    logoUrl: "/images/whitelabel-logos/marketup.svg",
    faviconUrl:
      "https://marketup.com/wp-content/uploads/2020/12/cropped-mup-icon_Prancheta-1-32x32.png",

     menuColor: "#082565",

    primaryColor: "#eead0e",
    secondaryColor: "#082565", 
    tertiaryColor: "#8b6508",

    formItemFontSize: 16,

    buttonColor: "#082565",
    buttonFontColor: "#FFFFFF",
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

    primaryColor: "#8CC63F",
    secondaryColor: "#000000",
    tertiaryColor: "#8CC63F",

    formItemFontSize: 16,

    buttonColor: "#8CC63F",
    buttonFontColor: "#FFFFFF",
  },
} satisfies Record<string, AppTheme>;

export type ThemeKey = keyof typeof themes