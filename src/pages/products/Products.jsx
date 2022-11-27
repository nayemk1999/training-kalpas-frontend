import React, { Component } from "react";
import { graphql } from "react-apollo";
import { get_all_products } from "../../apollo/product/query";
import Layout from "../../components/Layout/Layout";
import products from "../../dummy-data/products.json";
import ProductTable from "./ProductTable";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }
  column = [
    {
      title: "Id",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Sell",
      dataIndex: "sell",
      key: "sell",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Posted By",
      dataIndex: "postedby",
      key: "postedby",
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
    const { getAllProducts, loading, error, refetch, networkStatus } =
      this.props.data;
    if (networkStatus <= 4) {
      refetch();
    }
    // if (loading) {
    //   return <CircularProgress color="secondary" />;
    // }
    return (
      <Layout>
        <ProductTable
          data={getAllProducts || []}
          column={this.column}
          title={"Products List"}
          refetch={refetch}
        />
      </Layout>
    );
  }
}

export default graphql(get_all_products, {
  options: (props) => ({
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      page: 0,
    },
  }),
})(Products);
