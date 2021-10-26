import React from "react";
import { Title, Button, Form, Input, Error } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";
import { Spinner } from "../General/Spinner";

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue();
  const password = useInputValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Form disabled={loading} onSubmit={handleSubmit}>
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
      <Button disabled={loading} type="submit">
        {title}
      </Button>
      <Error>{error}</Error>
      {loading ? <Spinner /> : ""}
    </Form>
  );
};
