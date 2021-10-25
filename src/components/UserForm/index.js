import React from "react";
import { Title, Button, Form, Input } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue();
  const password = useInputValue();
  // console.log(email.value, password.value);
  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <Input name="email" type="text" placeholder="email" {...email} />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        {...password}
      />
      <Button type="submit">{title}</Button>
    </Form>
  );
};
