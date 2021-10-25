import React from "react";
import Context from "../context/context";
import { UserForm } from "../components/UserForm";

export const NotRegistered = () => (
  <Context.Consumer>
    {({ activateAuth }) => <UserForm onSubmit={activateAuth} />}
  </Context.Consumer>
);
