import React, { Component } from "react";

export default class FormContactUs extends Component {
  handleInputChange(e) {
    const target = e.target;
    const val = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: val
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    console.log("Submit form");
  }
  render() {
    return (
      <div>
        <p>{this.props.address}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            name="message"
            onChange={this.handleInputChange.bind(this)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
