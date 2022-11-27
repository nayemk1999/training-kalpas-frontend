import styled from "@emotion/styled";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import apolloGraphClient from "../../apollo/apolloClient";
import { get_product } from "../../apollo/product/query";
import Layout from "../../components/Layout/Layout";
import ImageIcon from "@mui/icons-material/Image";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    // In this specific case you may want to use `options.pollInterval` instead.
    // this.props.data.startPolling(1000);
    apolloGraphClient
      .query({
        query: get_product,
        variables: {
          getProductId: this.props?.match?.params?.id,
        },
        fetchPolicy: "cache-first",
      })
      .then((result) => {
        const { data, loading } = result;
        this.setState({ product: data?.getProduct, loading: loading });
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
    // const { getProduct, loading, refetch, error, networkStatus } =
    //   this.props.data;
    // if (networkStatus <= 4) {
    //   refetch();
    // }
    return (
      <Layout>
        <Typography
          variant="h5"
          component="h6"
          sx={{ textAlign: "center", textDecoration: "underline" }}
        >
          Product Details Page
        </Typography>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={4}>
              <p>Product Id-</p>
              <p>{this.state.product?.id}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Title-</p>
              <p>{this.state.product?.title}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Image-</p>
              <Avatar src={this.state.product?.image} variant="rounded">
                <ImageIcon />
              </Avatar>
            </Grid>

            <Grid item xs={4}>
              <p>Product Price</p>
              <p>{this.state.product?.price}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Posted By-</p>
              <p>{this.state.product?.postedby}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Stock-</p>
              <p>{this.state.product?.stock}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Status-</p>
              <p>{this.state.product?.status}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Category-</p>
              <p>{this.state.product?.category}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Product Sell-</p>
              <p>{this.state.product?.sell}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Create Time</p>
              <p>{new Date(this.state.product?.createAt).toLocaleString()}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Last Update</p>
              <p>{new Date(this.state.product?.updateAt).toLocaleString()}</p>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default ProductDetails;
// export default graphql(get_product, {
//   options: (props) => ({
//     fetchPolicy: "cache-and-network",
//     variables: {
//       getProductId: props?.match?.params?.id,
//     },
//   }),
// })(ProductDetails);
