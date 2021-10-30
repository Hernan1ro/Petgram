import React from "react";
import LogoHome from "../../assets/homeIcon.png";
import { SubmitButton } from "../../components/SubmitButton";
import { Container, Title, Img, Link, P, Span } from "./Styles";

export const Welcome = () => {
  return (
    <Container>
      <Title>🐱Tu App de mascotas domésticas🐶</Title>
      <Img src={LogoHome} alt="Home logo" />
      <Link to="/login">
        <SubmitButton>Inicia sesión</SubmitButton>
      </Link>
      <P>¿No tienes una cuenta?</P>
      <Link to="/login">
        <Span>Registrate</Span>
      </Link>
    </Container>
  );
};
