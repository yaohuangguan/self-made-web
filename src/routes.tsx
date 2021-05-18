import { Route } from "react-router-dom";

import React, { lazy } from "react";
interface IRoutes {
  exact: boolean;
  path: string;
  name: string;
  //@ts-ignore
  component:any;
  routes: any[];
}

const MainPage = lazy(() => import("./module/index-page"));

export const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
    exact: true,
    routes: [],
  },
];

export default function renderAppRoutes(routes: IRoutes[]) {
  return routes.map((item) => {
    return (
      <Route
        key={item.path}
        path={item.path}
        exact={item.exact}
        component={item.component}
      />
    );
  });
}
