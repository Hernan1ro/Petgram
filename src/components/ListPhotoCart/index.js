import React from "react";
import { PhotoCart } from "../PhotoCart";
export const ListPhotoCart = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <PhotoCart key={id} />
      ))}
    </ul>
  );
};
