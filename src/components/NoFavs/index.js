import React from "react";
import { Div, Img } from "./styles";
import sadPet from "../../assets/favImage.png";
export const NoFavs = () => {
  return (
    <Div>
      <Img src={sadPet} alt="Sad pet" />
    </Div>
  );
};
