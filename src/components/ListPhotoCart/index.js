import React from "react";
import { PhotoCart } from "../PhotoCart";
export const ListPhotoCart = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <PhotoCart key={id} />
      ))}
    </ul>
  );
};
