import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const createTheme = ({ darkMode }: { darkMode: boolean }) =>
  responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: "Helvetica, Arial, sans-serif",
      },
      palette: {
        type: darkMode ? "dark" : "light",
        primary: {
          main: darkMode ? "#007705" : "#2e7d32",
        },
        secondary: {
          main: darkMode ? "#5d99c6" : "#90caf9",
        },
        error: {
          main: darkMode ? "#ff4455" : "#ff1100",
        },
      },
    })
  );
