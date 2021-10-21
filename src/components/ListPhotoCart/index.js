//DEPENDENCIES
import React from "react";
import { useQuery, gql } from "@apollo/client";

//COMPONENTS
import { PhotoCart } from "../PhotoCart";

const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListPhotoCart = () => {
  const { loading, error, data } = useQuery(whitPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCart key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
