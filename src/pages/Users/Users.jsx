import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import CommonTable from "../../components/common/Table";
import users from "../../dummy-data/users.json";
import { Query } from "react-apollo";
import { get_all_users } from "../../apollo/user/query";
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
  ];
  render() {
    return (
      <Layout>
        <Query
          query={get_all_users}
          variables={{
            limit: this.state.limit,
            page: this.state.page,
            filter: this.state.filter,
          }}
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data, refetch, networkStatus }) => {
            // if (networkStatus === 4) return "Refetching!";
            if (loading) return null;
            if (error) return `Error! ${error}`;
            return (
              <CommonTable
                data={data.getAllUsers}
                column={this.column}
                title={"Users List"}
              />
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Users;
