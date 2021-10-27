import React from "react";
import { RenderProp } from "../container/GetFavorites";
import { UserTitle } from "../components/SubmitButton/styles";
import { Layout } from "../components/Layout";

export const Favs = () => {
  return (
    <Layout
      title="Tus favoritos"
      subtitle="aquí puedes encontrar tus favoritos"
    >
      <UserTitle>Favoritos</UserTitle>
      <RenderProp />
    </Layout>
  );
};
