import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { PageHome } from '../pages/PageHome'
import { PageAbout } from '../pages/PageAbout'
import { PageContact } from '../pages/PageContact'
import PageFruit from '../../containers/PageFruit'
import { Page404 } from '../pages/Page404'
import { LocationNav } from '../LocationNav'

export class LayoutMain extends Component {
  render() {

    return (
      <div className="wrapper">
        <LocationNav props={this.props} />

        <Switch>
          <Route path="/about-us" component={PageAbout} />
          <Route path="/contact" component={PageContact} />
          <Route path="/fruit" component={PageFruit} />
          <Route path="/" exact component={PageHome} />
          <Route component={Page404}></Route>
        </Switch>
      </div>
    )
  }
};
