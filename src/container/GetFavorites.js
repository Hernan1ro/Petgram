import { useQuery, gql } from "@apollo/client";
import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Spinner } from "../components/General/Spinner";
import { NotFound } from "../components/NotFound";

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

const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, data, error };
};

export const RenderProp = () => {
  const { loading, data, error } = FavsWithQuery();
  if (loading) return <Spinner />;
  if (error) return <NotFound />;
  const { favs } = data;
  return <ListOfFavs favs={favs} />;
};
