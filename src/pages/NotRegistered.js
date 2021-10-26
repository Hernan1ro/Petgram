import React from "react";
import { UserForm } from "../components/UserForm";
import Context from "../context/context";
import { useRegisterMutation } from "../container/RegisterMutation";

export const NotRegistered = () => {
  const { registerMutation, data, loading, error } = useRegisterMutation();

  const errorMsg =
    error && "El usuario ya se encuentra registrado o hubo un problema";

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };
        return (
          <>
            <UserForm
              error={errorMsg}
              loading={loading}
              onSubmit={onSubmit}
              title="Registrarse"
            />
            <UserForm onSubmit={activateAuth} title="Iniciar Sesion" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
