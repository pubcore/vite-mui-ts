import React, { ReactNode } from "react";
import { Link as MuiLink } from "@mui/material";

export default function Link({
  children,
  href,
}: {
  href: string;
  children: ReactNode;
}) {
  //target and rel settings for web sercurity ...
  return (
    <MuiLink {...{ href }} target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}
