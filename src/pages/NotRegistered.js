import React from "react";
import Context from "../context/context";
import { UserForm } from "../components/UserForm";

export const NotRegistered = () => (
  <Context.Consumer>
    {({ activateAuth }) => (
      <>
        <UserForm onSubmit={activateAuth} title={"Iniciar sesión"} />
        <UserForm onSubmit={activateAuth} title={"Registrarse"} />
      </>
    )}
  </Context.Consumer>
);
