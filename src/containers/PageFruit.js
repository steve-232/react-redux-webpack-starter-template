import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addApple, addPear } from '../actions/fruitActions'

class PageFruit extends Component {
  addApple(e) {
    const target = e.currentTarget;
    let currentVal = this.props.apple;

    target.textContent === '+' ? currentVal++ : currentVal--;

    this.props.addApple({apple:currentVal});
  }
  addPear(e) {
    const target = e.currentTarget;
    let currentVal = this.props.pear;

    target.textContent === '+' ? currentVal++ : currentVal--;

    this.props.addPear({pear:currentVal});
  }
  render() {
    console.log(this);
    return (
      <div className="wrapper">
        <h3>Fruit</h3>
        <p>Apple: {this.props.apple} &nbsp;&nbsp;
          <button onClick={this.addApple.bind(this)}>+</button>
          <button onClick={this.addApple.bind(this)}>-</button>
        </p>
        <p>Pear: {this.props.pear} &nbsp;&nbsp;
          <button onClick={this.addPear.bind(this)}>+</button>
          <button onClick={this.addPear.bind(this)}>-</button>
        </p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    apple: state.fruit.apple,
    pear: state.fruit.pear
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addApple: (val) => {
      dispatch(addApple(val))
    },
    addPear: (val) => {
      dispatch(addPear(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFruit)
