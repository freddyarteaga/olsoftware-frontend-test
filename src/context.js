import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    isCollapse,
    setIsCollapse,
    loading,
    isAuth,
    setIsAuth,
    setLoading
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
