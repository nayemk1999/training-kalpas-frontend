import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import CommonTable from "../../components/common/Table";
import users from "../../dummy-data/users.json";
import { graphql, Query } from "react-apollo";
import { get_all_users } from "../../apollo/user/query";
import { CircularProgress } from "@mui/material";
import UserTable from "./UserTable";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      limit: 10,
      page: 0,
      filter: "",
    };
  }
  column = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CreateAt",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  componentDidMount() {
    // In this specific case you may want to use `options.pollInterval` instead.
    this.props.data.startPolling(1000);
  }
  componentWillUnmount() {
    // In this specific case you may want to use `options.pollInterval` instead.
    this.props.data.stopPolling(1000);
  }

  render() {
    const { getAllUsers, loading, error, refetch, networkStatus } =
      this.props.data;
    if (networkStatus <= 5) {
      refetch();
    }
    // if (loading) {
    //   return <CircularProgress color="secondary" />;
    // }
    return (
      <Layout>
        <UserTable
          data={getAllUsers || []}
          column={this.column}
          title={"Users List"}
          refetch={refetch}
        />
      </Layout>
    );
  }
}

export default graphql(get_all_users, {
  options: (props) => ({
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      page: 0,
    },
  }),
})(Users);
