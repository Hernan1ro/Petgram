import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListPhotoCart } from "./components/ListPhotoCart";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListPhotoCart />
    </div>
  );
};

export default App;
