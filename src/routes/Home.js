import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageAbout from "./About";

export default class PageHome extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <Link to="/about-us">About us</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/fruit">Fruit</Link>
      </div>
    );
  }
}
