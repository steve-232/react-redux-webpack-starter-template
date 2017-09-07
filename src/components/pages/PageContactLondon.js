import React, { Component } from 'react'
import { FormContactUs } from '../FormContactUs'

export class PageContactLondon extends Component {
  render() {
    return (
      <div>
        <h3>London Office</h3>
        <br />
        <FormContactUs address="58 Crown Street" />
      </div>
    )
  }
};
