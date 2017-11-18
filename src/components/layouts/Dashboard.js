import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PageDashboard from '../pages/Dashboard';
import LocationNav from '../LocationNav';

export default class LayoutDashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <LocationNav props={this.props} />

        <Switch>
          <Route path="/dashboard" component={PageDashboard} />
        </Switch>
      </div>
    )
  }
};
