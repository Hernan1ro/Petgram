import React from "react";
import { UserTitle, Div } from "./styles";
import { Layout } from "../../components/Layout";
import { ListOfFavs } from "../../components/ListOfFavs";
import { FavsWithQuery } from "../../container/GetFavorites";
import { NoFavs } from "../../components/NoFavs";
import { Spinner } from "../../components/General/Spinner";
import { NotFound } from "../../components/NotFound";

export const Favs = () => {
  const { loading, data, error } = FavsWithQuery();
  if (loading) return <Spinner />;
  if (error) return <NotFound />;
  const { favs } = data;
  return (
    <Layout
      title="Tus favoritos"
      subtitle="aquí puedes encontrar tus favoritos"
    >
      <Div>
        <UserTitle>
          {favs.length > 0 ? "Tus favoritos ❤" : "No tienes favoritos 😢"}
        </UserTitle>
        {favs.length < 1 ? <NoFavs /> : <ListOfFavs favs={favs} />}
      </Div>
    </Layout>
  );
};
