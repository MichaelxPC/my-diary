import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, setState] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
