import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListPhotoCart } from "./components/ListPhotoCart";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListPhotoCart categoryId={1} />
    </div>
  );
};

export default App;
