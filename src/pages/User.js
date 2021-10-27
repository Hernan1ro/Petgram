import React from "react";
import Context from "../context/context";
import { SubmitButton } from "../components/SubmitButton";
import { UserTitle } from "../components/SubmitButton/styles";
import { Layout } from "../components/Layout";

export const User = () => {
  return (
    <Context.Consumer>
      {({ removeAuth }) => {
        return (
          <Layout title="Cerrar sesión">
            <UserTitle>Cerrar sesión</UserTitle>
            <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
          </Layout>
        );
      }}
    </Context.Consumer>
  );
};
