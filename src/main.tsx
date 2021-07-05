import React, { ReactNode, useMemo } from "react";
import { render } from "react-dom";
import App from "./App";
import { StylesProvider } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "./theme";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import PT from "prop-types";

render(
  <Decorator>
    <App />
  </Decorator>,
  document.getElementById("root")
);

Decorator.propTypes = {
  children: PT.node,
};
function Decorator({ children }: { children: ReactNode }) {
  var darkMode = useMediaQuery("(prefers-color-scheme: dark)"),
    theme = useMemo(() => createTheme({ darkMode }), [darkMode]);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider {...{ theme }}>
        <ThemeProvider {...{ theme }}>
          <CssBaseline />
          <React.StrictMode>{children}</React.StrictMode>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}
