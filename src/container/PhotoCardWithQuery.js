import React from "react";
import { PhotoCart } from "../components/PhotoCart";

import { gql, useQuery } from "@apollo/client";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PhotoCartWithQuery = ({ id }) => {
  console.log(id);
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id,
    },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <PhotoCart {...data.photo} />;
};
