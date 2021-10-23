import React from "react";
import { PhotoCartWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = (props) => {
  return <PhotoCartWithQuery id={props.match.params.id} />;
};
