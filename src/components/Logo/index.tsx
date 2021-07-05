import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Img = styled.img`
  height: 30vmin;
  pointer-events: none;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 20s linear;
`;

export default function Logo() {
  return <Img src={logo} />;
}
