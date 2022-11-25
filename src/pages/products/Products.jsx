import { useQuery } from "@apollo/react-hooks";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { GetAllProducts } from "../../apollo/product/hooks";
import { get_all_products } from "../../apollo/product/query";
import CommonTable from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import products from "../../dummy-data/products.json";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      limit: 10,
      page: 0,
      filter: "",
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

  render() {
    return (
      <Layout>
        <Query
          query={get_all_products}
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
                data={data.getAllProducts}
                column={this.column}
                title={"Products List"}
              />
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Products;
