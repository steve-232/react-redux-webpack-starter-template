import React from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LayoutMain from "./components/layouts/Main";
import LayoutDashboard from "./components/layouts/Dashboard";
import store from "./store";

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/dashboard" component={LayoutDashboard} />
        <Route path="/" component={LayoutMain} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
