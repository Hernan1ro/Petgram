import React, { createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
