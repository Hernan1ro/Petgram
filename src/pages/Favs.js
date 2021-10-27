import React from "react";
import { RenderProp } from "../container/GetFavorites";

export const Favs = () => {
  return (
    <React.Fragment>
      <h1>Favoritos</h1>
      <RenderProp />
    </React.Fragment>
  );
};
