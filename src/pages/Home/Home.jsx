import React, { Component } from "react";
import UserContext from "../../AuthenticationApp/Context/userContext";
import Layout from "../../components/Layout/Layout";
import SideBar from "../../components/SideBar/SideBar";

class Home extends Component {
  static contextType = UserContext;
  componentDidMount() {
    const { user, setUser } = this.context;
    console.log(user);
  }
  render() {
    return (
      <Layout>
        <p>This Is DashBoard........</p>
      </Layout>
    );
  }
}

export default Home;
