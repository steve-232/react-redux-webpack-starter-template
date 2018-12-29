import React, { Component } from "react";
import FormContactUs from "../components/FormContactUs";

export default class PageContactLosAngeles extends Component {
  render() {
    return (
      <div>
        <h3>Los Angeles Office</h3>
        <br />
        <FormContactUs address="4480 Southside Lane" />
      </div>
    );
  }
}
