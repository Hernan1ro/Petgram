import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue();
  const password = useInputValue();
  console.log(email.value, password.value);
  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="text" placeholder="email" {...email} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        {...password}
      />
      <button>Inciar sesión</button>
    </form>
  );
};
