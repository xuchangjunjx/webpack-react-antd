/* eslint-disable no-unused-vars */
import React from "react";
import { Switch, Route, Redirect } from "react-router";

export function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.key || i}
              from={route.path}
              to={route.redirect}
            ></Redirect>
          );
        }
        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props =>
              route.render ? (
                route.render({ ...props, ...extraProps, route: route })
              ) : (
                <route.component {...props} {...extraProps} route={route} />
              )
            }
          />
        );
      })}
    </Switch>
  ) : null;
}

export default renderRoutes;
