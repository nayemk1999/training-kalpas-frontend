import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Routing from "./routes";

export default class App extends Component {
  render() {
    return (
      <>
        <Routing />
      </>
    );
  }
}
