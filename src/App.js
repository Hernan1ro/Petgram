import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListPhotoCart } from "./components/ListPhotoCart";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
      <ListPhotoCart />
    </div>
  );
};

export default App;
