import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage/HomePage";
import { Page } from "./types";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export const pages: Page[] = [{ path: "/", exact: true, component: HomePage }];

const Routes = () => {
  return (
    <BrowserRouter>
      {/* === HEADER... === */}
      <Header />

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={() => <h1>404</h1>} />
      </Switch>

      {/* === FOOTER... === */}
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
