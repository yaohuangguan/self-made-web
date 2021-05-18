import React from "react";
import renderAppRoutes, { routes } from "./routes";
import { ContextProvider } from "./context/provider";

const AppController = (props) => {
  return <ContextProvider>{renderAppRoutes(routes)}</ContextProvider>;
};

export default AppController;
