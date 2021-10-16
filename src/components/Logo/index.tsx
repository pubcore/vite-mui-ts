import { Box } from "@mui/system";
import React from "react";
import logo from "./logo.svg";

export default function Logo() {
  return (
    <Box
      component="img"
      src={logo}
      sx={{
        height: "30vmin",
        pointerEvents: "none",
        "@keyframes App-logo-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "transform: rotate(360deg)" },
        },
        animation: "App-logo-spin infinite 20s linear",
      }}
    />
  );
}
