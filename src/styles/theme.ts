import { createTheme } from "@mui/material";
import { type AppTheme } from "../theme/theme.types";

export const createMuiTheme = (appTheme: AppTheme) => createTheme({
  palette: {
    primary: { main: appTheme.primaryColor, contrastText: appTheme.buttonFontColor },
    secondary: { main: appTheme.secondaryColor, contrastText: appTheme.buttonFontColor },
    third: { main: appTheme.tertiaryColor, contrastText: appTheme.buttonFontColor },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: appTheme.primaryColor,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
        "form": {
          display: "flex",
          alignItems: "center",
        }
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        color: "secondary",
        fontSize: "small",
      },
    },


// --------------------- Reset Global styles ---------------------
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        html: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },

        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
        },

        "#root": {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },

        a: {
          textDecoration: "none",
          color: "inherit",
        },

        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },

        button: {
          border: "none",
          background: "none",
          cursor: "pointer",
        },

        form: {
          display: "flex",
          justifyContent: "center",
        }
      },
    },

  },
});