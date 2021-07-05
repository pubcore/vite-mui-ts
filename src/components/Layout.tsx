import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  ${({
    theme: {
      palette: { background, getContrastText },
    },
  }) => `background-color: ${background.default};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${getContrastText(background.default)};`}
`;

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
