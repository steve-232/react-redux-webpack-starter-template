import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { PageDashboardUser } from './PageDashboardUser'
import { PageDashboardAdmin } from './PageDashboardAdmin'

export class PageDashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <Link to={`${this.props.match.url}/user`}>User</Link><br />
        <Link to={`${this.props.match.url}/admin`}>Admin</Link>

        <Switch>
          <Route path={`${this.props.match.url}/user`} component={PageDashboardUser} />
          <Route path={`${this.props.match.url}/admin`} component={PageDashboardAdmin} />
        </Switch>
      </div>
    )
  }
};
