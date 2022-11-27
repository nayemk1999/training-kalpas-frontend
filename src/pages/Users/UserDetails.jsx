import { Container, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import apolloGraphClient from "../../apollo/apolloClient";
import { get_user } from "../../apollo/user/query";
import Layout from "../../components/Layout/Layout";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    // In this specific case you may want to use `options.pollInterval` instead.
    // this.props.data.startPolling(1000);
    apolloGraphClient
      .query({
        query: get_user,
        variables: {
          getUserId: this.props?.match?.params?.id,
        },
        fetchPolicy: "cache-first",
      })
      .then((result) => {
        const { data, loading } = result;
        this.setState({ user: data?.getUser, loading: loading });
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        this.setState({ page: this.state.page });
      });
  }
  componentWillUnmount() {
    // In this specific case you may want to use `options.pollInterval` instead.
    // this.props.data.stopPolling(1000);
  }

  render() {
    return (
      <Layout>
        <Typography
          variant="h5"
          component="h6"
          sx={{ textAlign: "center", textDecoration: "underline" }}
        >
          User Details Page
        </Typography>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={4}>
              <p>User Id-</p>
              <p>{this.state.user?.id}</p>
            </Grid>
            <Grid item xs={4}>
              <p>First name-</p>
              <p>{this.state.user?.firstName}</p>
            </Grid>

            <Grid item xs={4}>
              <p>User Email</p>
              <p>{this.state.user?.email}</p>
            </Grid>
            <Grid item xs={4}>
              <p>User Phone Number-</p>
              <p>{this.state.user?.phoneNumber}</p>
            </Grid>
            <Grid item xs={4}>
              <p>User Status-</p>
              <p>{this.state.user?.status}</p>
            </Grid>
            <Grid item xs={4}>
              <p>User Country-</p>
              <p>{this.state.user?.country}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Create Time</p>
              <p>{new Date(this.state.user?.createAt).toLocaleString()}</p>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default UserDetails;
