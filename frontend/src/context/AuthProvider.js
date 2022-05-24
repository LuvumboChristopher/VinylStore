import { createContext, useState } from "react";

const AuhtContext = createContext({});

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({})

  return (
    <AuhtContext.Provider value={{auth, setAuth}}>
      {children}
    </AuhtContext.Provider>
  )
}

export default AuhtContext;