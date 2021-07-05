import React, { ReactNode } from "react";
import { Link as MuiLink } from "@material-ui/core";

export default function Link({
  children,
  href,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <MuiLink {...{ href }} target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}
