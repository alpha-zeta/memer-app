// jshint esversion:6
import React, { Component } from "react";
import "./NavBar.style.scss";
import { Title } from "../../utils.components/Title/Title.component";
import { Util } from "../../utils.components/Util/Util.component";
import { Container } from "react-bootstrap";
import Toggler from "../../utils.components/Toggler/Toggler.components";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleCollapse = (e) => {
    console.log(this.state.open);
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <Container fluid className="navCont">
          <Title className={this.state.open ? "disN" : ""}>Memer XD</Title>
          <Toggler func={this.handleCollapse}></Toggler>
          {this.state.open ? <div className="addMeme"></div> : null}
        </Container>
      </div>
    );
  }
}
export default NavBar;
