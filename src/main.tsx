import React, { ReactNode, useMemo } from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme";
import { CssBaseline, useMediaQuery } from "@mui/material";

render(
  <Decorator>
    <App />
  </Decorator>,
  document.getElementById("root")
);

function Decorator({ children }: { children: ReactNode }) {
  var darkMode = useMediaQuery("(prefers-color-scheme: dark)"),
    theme = useMemo(() => createTheme({ darkMode }), [darkMode]);
  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <React.StrictMode>{children}</React.StrictMode>
    </ThemeProvider>
  );
}
