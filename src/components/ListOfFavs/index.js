import React from "react";
import { Image, Grid, Link } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => {
        return (
          <Link to={`/detail/${fav.id}`}>
            <Image src={fav.src} key={fav.id} />
          </Link>
        );
      })}
    </Grid>
  );
};
