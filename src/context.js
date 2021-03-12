import React, { createContext, useState } from "react";
import { usersData } from './mocks/data'

export const Context = createContext();

const Provider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState(usersData)
  const [] = useState()

  const value = {
    isCollapse,
    setIsCollapse,
    loading,
    isAuth,
    setIsAuth,
    setLoading,
    users,
    setUsers
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
