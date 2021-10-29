import React from "react";
import LogoHome from "../../assets/homeIcon.png";
import { Container, Title, Img } from "./Styles";

export const Welcome = () => {
  return (
    <Container>
      <Title>🐱Tu App de mascotas domésticas🐶</Title>
      <Img src={LogoHome} alt="Home logo" />
    </Container>
  );
};
