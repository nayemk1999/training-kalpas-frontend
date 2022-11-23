import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
