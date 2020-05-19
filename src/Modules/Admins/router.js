import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routerList = [];

/**
 * addd new router to the routerList
 * @param {string} path
 * @param {React.Component} component
 */

function addRouter(path, component) {
  routerList.push({
    path,
    component,
  });
}

function Routes() {
  const routes = routerList.map((route, index) => {
    return (
      <Route
        path={route.path}
        exact={true}
        key={index}
        component={route.component}
      ></Route>
    );
  });

  return (
    <Router>
      <Route>
        <Switch>{routes}</Switch>
      </Route>
    </Router>
  );
}

export function scan() {
  ReactDOM.render(<Routes />, document.getElementById("root"));
}

export default {
  add: addRouter,
};
