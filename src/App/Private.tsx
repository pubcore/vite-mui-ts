import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { S } from "../store";
import { Login } from "./Login";

type PrivateProps = {
  children: ReactNode;
};

const selectAuthentication = (s: S) => s.authentication;

export function Private({ children }: PrivateProps) {
  const authenitcation = useSelector(selectAuthentication);
  const isAuthenticated = Boolean(authenitcation?.token);
  return isAuthenticated ? <>{children}</> : <Login />;
}
