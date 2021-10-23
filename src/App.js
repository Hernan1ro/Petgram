import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { PhotoCartWithQuery } from "./container/PhotoCardWithQuery";
import Home from "./pages/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        {detailId ? (
          <Route
            exact
            path="/"
            render={() => <PhotoCartWithQuery id={detailId} />}
          />
        ) : (
          <>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/pet/:id"
              render={(props) => <Home {...props} />}
            />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
