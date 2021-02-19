// jshint esversion:6
import React, { Component } from "react";
import "./Util.style.scss";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
class Util extends Component {
  render() {
    return (
      <div className="utilCont">
        <Button
          className={`btnCont ${this.props.className}`}
          onClick={this.props.func}
        >
          <i className={this.props.icon}></i>
        </Button>
      </div>
    );
  }
}
export { Util };
