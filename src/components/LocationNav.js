import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LocationNav extends Component {
  render() {
    let goBack = null;
    if (this.props.props.location.pathname !== '/') goBack = <i onClick={this.props.props.history.goBack}>go back</i>;

    return (
      <p>
        <i>Layout Main</i> - &nbsp;
        {goBack && <Link to="/"><i>homepage</i></Link>} &nbsp;
        {goBack}
      </p>
    )
  }
};
