import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListPhotoCart } from "./components/ListPhotoCart";
import { Logo } from "./components/Logo";
import { PhotoCartWithQuery } from "./container/PhotoCardWithQuery";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCartWithQuery id={detailId} />
      ) : (
        <React.Fragment>
          <ListOfCategories />
          <ListPhotoCart categoryId={1} />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
