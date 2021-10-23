import React from "react";
import { Image, Link } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, id, emoji = "?" }) => (
  <Link to={`/pet/${id}`}>
    <Image src={cover} />
    {emoji}
  </Link>
);
