import React from "react";
import { Title, Form, Input, Error } from "./styles";
import { SubmitButton } from "../SubmitButton";
import { useInputValue } from "../../hooks/useInputValue";
import { Spinner } from "../General/Spinner2";
import singupLogo from "../../assets/singuplogo.png";
import loginLogo from "../../assets/userIcon2.png";
import errorImg from "../../assets/errorLogo.png";

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue();
  const password = useInputValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!testEmail) {
      alert("Correo electrónico no válido");
    } else if (!(password.value.length > 0)) {
      alert("Password no válido");
    } else if (testEmail && password.value.length > 0) {
      onSubmit({ email: email.value, password: password.value });
    }
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
        type="email"
        placeholder="email"
        {...email}
        disabled={loading}
        autocomplete="email"
      />
      <Input
        disabled={loading}
        name="password"
        type="password"
        placeholder="Password"
        autocomplete="password"
        {...password}
      />
      <SubmitButton disabled={loading} type="submit">
        {title}
      </SubmitButton>
      {error && <img src={errorImg} width="10%" />}
      <Error>{error}</Error>
      {loading ? <Spinner /> : ""}
    </Form>
  );
};
