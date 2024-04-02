import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { AppContext } from "../../Context";
import Home from "../Home";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

function AppUI() {
  const {} = React.useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default AppUI;
