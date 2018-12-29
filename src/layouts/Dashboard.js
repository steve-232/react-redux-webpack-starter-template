import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PageDashboard from "../routes/Dashboard";
import LocationNav from "../components/LocationNav";

export default class LayoutDashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <LocationNav props={this.props} />

        <Switch>
          <Route path="/" component={PageDashboard} />
        </Switch>
      </div>
    );
  }
}
