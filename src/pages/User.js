import React from "react";
import Context from "../context/context";
import { SubmitButton } from "../components/SubmitButton";
import { UserTitle } from "../components/SubmitButton/styles";

export const User = () => {
  return (
    <Context.Consumer>
      {({ removeAuth }) => {
        return (
          <>
            <UserTitle>Cerrar sesión</UserTitle>
            <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
          </>
        );
      }}
    </Context.Consumer>
  );
};
