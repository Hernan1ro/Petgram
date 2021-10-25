import React from "react";
import Context from "../context/context";

export const NotRegistered = () => (
  <Context.Consumer>
    {({ activateAuth }) => (
      <form onSubmit={activateAuth}>
        <button>Inciar sesión</button>
      </form>
    )}
  </Context.Consumer>
);
