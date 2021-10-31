import { useQuery, gql } from "@apollo/client";
import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Spinner } from "../components/General/Spinner";
import { NotFound } from "../components/NotFound";
import { NoFavs } from "../components/NoFavs";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error };
};
