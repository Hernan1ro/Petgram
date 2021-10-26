import React from "react";
import { UserForm } from "../components/UserForm";
import Context from "../context/context";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegistered = () => {
  const {
    registerMutation,
    data,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegisterMutation();
  const {
    login,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  const errorMsg =
    errorRegister && "El usuario ya se encuentra registrado o hubo un problema";
  const errorMsgLogin =
    errorLogin && "Contraseña incorrecta, usuario incorrecto o no existente";
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };
        const onSubmitLogin = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          login({ variables })
            .then((res) => {
              activateAuth();
            })
            .catch((err) => {
              console.log(err);
            });
        };
        return (
          <>
            <UserForm
              error={errorMsg}
              loading={loadingRegister}
              onSubmit={onSubmit}
              title="Registrarse"
            />
            <UserForm
              loading={loadingLogin}
              error={errorMsgLogin}
              onSubmit={onSubmitLogin}
              title="Iniciar Sesion"
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
