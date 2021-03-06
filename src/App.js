import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/logo/index";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { Login } from "./pages/Login";
import { NotFound } from "./components/NotFound";
import { Welcome } from "./pages/Welcome";
import { SingUp } from "./pages/SingUp";
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
              {!isAuth && <Route exact path="/login" component={Login} />}
              {!isAuth && <Redirect from="/favs" to="/login" />}
              {!isAuth && <Redirect from="/user" to="/" />}
              {!isAuth && <Redirect from="/home" to="/login" />}
              {isAuth && <Redirect from="/login" to="/home" />}
              {isAuth && <Redirect from="/singup" to="/home" />}
              {/* {isAuth && <Redirect from="/" to="/home" />} */}
              <Route
                exact
                path="/detail/:id"
                render={(props) => <Detail {...props} />}
              />
              <Route exact path="/" component={Welcome} />
              <Route
                exact
                path="/pet/:id"
                render={(props) => <Home {...props} />}
              />
              <Route
                exact
                path="/home"
                render={(props) => <Home {...props} />}
              />
              <Route exact path="/user" component={User} />
              <Route exact path="/favs" component={Favs} />
              <Route exact path="/singup" component={SingUp} />
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
