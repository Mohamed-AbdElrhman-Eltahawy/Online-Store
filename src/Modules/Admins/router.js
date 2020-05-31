import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Middleware from "reactor/middleware";

const routerList = [];

const history = createBrowserHistory();
/**
 * addd new router to the routerList
 * @param {string} path
 * @param {React.Component} component
 * @param {function|Array|null} middleware
 */

function addRouter(path, component, middleware = null) {
  routerList.push({
    path,
    component,
    middleware,
  });
}

/**
 * return all application routs
 * @returns {Array}
 */

function Routes() {
  const routes = routerList.map((route, index) => {
    return (
      <Route path={route.path} exact={true} key={index}>
        <Middleware route={route} history={history} />
      </Route>
    );
  });

  return (
    <Router history={history}>
      <Route>
        <Switch>{routes}</Switch>
      </Route>
    </Router>
  );
}

export function navigationTo(path) {
  history.push(path);
}

export function scan() {
  ReactDOM.render(<Routes />, document.getElementById("root"));
}

export default {
  add: addRouter,
};
