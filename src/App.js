// jshint esversion:6
import React, { Component } from "react";
import "./App.scss";
import { Util } from "./components/utils.components/Util/Util.component";
import NavBar from "./components/main.components/NavBar/NavBar.component";
import { Container } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="Custom">
        <Container>
          <NavBar></NavBar>
        </Container>
      </div>
    );
  }
}

export default App;
