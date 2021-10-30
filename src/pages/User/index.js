import React from "react";
import Context from "../../context/context";
import { SubmitButton } from "../../components/SubmitButton";
import { Layout } from "../../components/Layout";
import { Div, Img } from "./styles";
import userLogo from "../../assets/userLogout3.png";

export const User = () => {
  return (
    <Context.Consumer>
      {({ removeAuth }) => {
        return (
          <Layout title="Cerrar sesión">
            <Div>
              <Img width="40%" src={userLogo} alt="logout-image" />
              <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
            </Div>
          </Layout>
        );
      }}
    </Context.Consumer>
  );
};
