import React from "react";
import { RenderProp } from "../container/GetFavorites";
import { UserTitle } from "../components/SubmitButton/styles";

export const Favs = () => {
  return (
    <React.Fragment>
      <UserTitle>Favoritos</UserTitle>
      <RenderProp />
    </React.Fragment>
  );
};
