import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [data, setData] = useState({
    counter: 0,
    id: null
  });

  const [itemsState, setItemsState] = useState({ quesadillas: 0, tortas: 0, tacos: 0, gorditas: 0, tostadas: 0, refrescos: 0, agua: 0, pastel: 0, pay: 0, helado: 0});

  return (
    <AuthContext.Provider value={{ data, setData, itemsState, setItemsState }} >{children}</AuthContext.Provider>
  );
};


export function useAuthContext() {
  return useContext(AuthContext);
}