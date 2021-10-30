import React from "react";
import { Title, Form, Input, Error } from "./styles";
import { SubmitButton } from "../SubmitButton";
import { useInputValue } from "../../hooks/useInputValue";
import { Spinner } from "../General/Spinner";
import singupLogo from "../../assets/singuplogo.png";
import loginLogo from "../../assets/userIcon2.png";

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue();
  const password = useInputValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Form disabled={loading} onSubmit={handleSubmit}>
      <img
        width="40%"
        src={title === "Registrarse" ? singupLogo : loginLogo}
        alt="signup logo"
      />
      <Title>{title}</Title>
      <Input
        name="email"
        type="text"
        placeholder="email"
        {...email}
        disabled={loading}
      />
      <Input
        disabled={loading}
        name="password"
        type="password"
        placeholder="Password"
        {...password}
      />
      <SubmitButton disabled={loading} type="submit">
        {title}
      </SubmitButton>
      <Error>{error}</Error>
      {loading ? <Spinner /> : ""}
    </Form>
  );
};
