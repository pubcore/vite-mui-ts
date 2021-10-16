import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
