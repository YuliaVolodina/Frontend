import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Problems from "./pages/Problems";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="problems" name="problems" component={Problems} />
      <Route path="settings" name="settings" component={Settings} />
      <Route path="help" name="help" component={Help} />
    </Route>
  </Router>,
  app
);
