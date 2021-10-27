import React, { createContext } from "react";
import { useApolloClient } from "@apollo/client";

const Context = createContext();

const Provider = ({ children }) => {
  const client = useApolloClient();
  const [isAuth, setIsAuth] = React.useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
      client.resetStore();
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
