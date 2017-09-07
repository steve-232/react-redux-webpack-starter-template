import React, { Component } from 'react'
import { PageContact } from './PageContact'
import { Link } from 'react-router-dom'

export class PageAbout extends Component {
  render() {
    return (
      <div className="wrapper">
        <h3>About us</h3>
        <p>We are the best :)</p>
        <br />
        <Link to="contact">Contact us</Link>
      </div>
    )
  }
};
