import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListPhotoCart } from "../components/ListPhotoCart";
import { withRouter } from "react-router-dom";

function Home(props) {
  const { id } = props.match.params;

  console.log(props);

  return (
    <React.Fragment>
      <ListOfCategories />
      <ListPhotoCart categoryId={parseFloat(id)} />
    </React.Fragment>
  );
}

export default withRouter(Home);
