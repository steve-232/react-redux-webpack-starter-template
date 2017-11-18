import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PageContactLosAngeles from './ContactLosAngeles';
import PageContactLondon from './ContactLondon';

export default class PageContact extends Component {
  render() {
    return (
      <div className="wrapper">
        <h3>Contact us</h3>
        <br />
        <Link to={`${this.props.match.url}/los-angeles`}>Contact office in Los Angeles</Link><br />
        <Link to={`${this.props.match.url}/london`}>Contact office in London</Link>

        <Switch>
          <Route path={`${this.props.match.url}/los-angeles`} component={PageContactLosAngeles} />
          <Route path={`${this.props.match.url}/london`} component={PageContactLondon} />
        </Switch>
      </div>
    )
  }
};
