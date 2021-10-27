import React, { useContext } from "react";
import Context from "../context/context";
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
  return (
    <Context.Consumer>
      {({ removeAuth }) => {
        return (
          <>
            <h1>Cerrar sesión</h1>
            <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
          </>
        );
      }}
    </Context.Consumer>
  );
};
