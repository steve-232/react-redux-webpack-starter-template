import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PageHome from "../routes/Home";
import PageAbout from "../routes/About";
import PageContact from "../routes/Contact";
import PageFruit from "../containers/PageFruit";
import Page404 from "../routes/404";
import LocationNav from "../components/LocationNav";

export default class LayoutMain extends Component {
  render() {
    return (
      <div className="wrapper">
        <LocationNav props={this.props} />

        <Switch>
          <Route path="/about-us" component={PageAbout} />
          <Route path="/contact" component={PageContact} />
          <Route path="/fruit" component={PageFruit} />
          <Route path="/" exact component={PageHome} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}
