import React from "react";
import { UserForm } from "../../components/UserForm";
import Context from "../../context/context";
import { useRegisterMutation } from "../../container/RegisterMutation";
import { Layout } from "../../components/Layout";
import { Div } from "./styles";

export const SingUp = () => {
  const {
    registerMutation,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegisterMutation();

  const errorMsg =
    errorRegister && "El usuario ya se encuentra registrado o hubo un problema";

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
          });
        };
        return (
          <Div>
            <Layout title="Registrarse">
              <UserForm
                error={errorMsg}
                loading={loadingRegister}
                onSubmit={onSubmit}
                title="Registrarse"
              />
            </Layout>
          </Div>
        );
      }}
    </Context.Consumer>
  );
};
