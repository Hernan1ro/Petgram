import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import Home from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route
          exact
          path="/detail/:id"
          render={(props) => <Detail {...props} />}
        />
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/pet/:id" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
