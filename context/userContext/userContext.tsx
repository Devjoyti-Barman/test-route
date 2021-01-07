import React, { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

export const UserContext = createContext<any>(null);

export const UserContextProvider = (props: any) => {
  const [user, userDispatch] = useReducer(userReducer, null);

  let value: any;
  value = { user: [user, userDispatch] };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
