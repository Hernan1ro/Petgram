import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegistered } from "./pages/NotRegistered";
import { NotFound } from "./components/NotFound";
import Context from "./context/context";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Context.Consumer>
          {({ isAuth }) => (
            <Switch>
              <Route
                exact
                path="/detail/:id"
                render={(props) => <Detail {...props} />}
              />
              <Route
                exact
                path="/home"
                render={(props) => <Home {...props} />}
              />
              <Route
                exact
                path="/pet/:id"
                render={(props) => <Home {...props} />}
              />
              {!isAuth && (
                <Route exact path="/login" component={NotRegistered} />
              )}
              {!isAuth && <Redirect from="/favs" to="/login" />}
              {!isAuth && <Redirect from="/user" to="/login" />}
              {isAuth && <Redirect from="/login" to="/home" />}
              <Route exact path="/user" component={User} />
              <Route exact path="/favs" component={Favs} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        </Context.Consumer>
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
};

export default App;
