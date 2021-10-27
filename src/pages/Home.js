import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListPhotoCart } from "../components/ListPhotoCart";
import { withRouter } from "react-router-dom";
import { Layout } from "../components/Layout";

function Home(props) {
  const { id } = props.match.params;

  return (
    <Layout
      title="Tu app de mascotas"
      subtitle="Con petgram puedes encontrar fotos de los animales domesticos más bonitos"
    >
      <ListOfCategories />
      <ListPhotoCart categoryId={parseFloat(id)} />
    </Layout>
  );
}

export default withRouter(Home);
