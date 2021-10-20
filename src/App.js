import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
};

export default App;
