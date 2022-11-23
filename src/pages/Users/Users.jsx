import React, { Component } from 'react';
import Layout from "../../components/Layout/Layout";
import CommonTable from "../../components/common/Table";
import users from "../../dummy-data/users.json";
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users,
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
              <CommonTable data={this.state.users} column={this.column} title={"Users List"}/>
            </Layout>
          );
    }
}

export default Users;
