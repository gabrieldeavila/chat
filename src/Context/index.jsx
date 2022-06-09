import React, { useState } from "react";

export const GlobalContext = React.createContext({});

function GlobalContextProvider({ children }) {
  const [state, setState] = useState({});

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
