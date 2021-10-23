//DEPENDENCIES
import React from "react";
import { useQuery, gql } from "@apollo/client";

//COMPONENTS
import { PhotoCart } from "../PhotoCart";
import { Spinner } from "../General/Spinner";

const whitPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListPhotoCart = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, {
    variables: { categoryId: categoryId },
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCart src={photo.src} key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>
  );
};
