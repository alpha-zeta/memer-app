// jshint esversion:6

import React from "react";
import { Component } from "react";
import "./Toggler.style.scss";

export default class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  handleClick = (e) => {
    this.setState({ clicked: !this.state.clicked });
    this.props.func();
  };
  render() {
    return (
      <div class="expand" onClick={this.handleClick}>
        <div class={`burger ${this.state.clicked ? "exp" : null}`}></div>
      </div>
    );
  }
}
