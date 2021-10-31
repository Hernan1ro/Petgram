import React from "react";
import { UserForm } from "../../components/UserForm";
import Context from "../../context/context";
import { useLoginMutation } from "../../container/LoginMutation";
import { Layout } from "../../components/Layout";
import { Div } from "./styles";

export const Login = () => {
  const {
    login,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  const errorMsgLogin =
    errorLogin && "Contraseña incorrecta, usuario incorrecto o no existente";
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmitLogin = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          login({ variables })
            .then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        return (
          <Div>
            <Layout title="Inciar sesión">
              <UserForm
                loading={loadingLogin}
                error={errorMsgLogin}
                onSubmit={onSubmitLogin}
                title="Iniciar sesión"
              />
            </Layout>
          </Div>
        );
      }}
    </Context.Consumer>
  );
};
