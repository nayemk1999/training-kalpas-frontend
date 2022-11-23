import React, { Component } from "react";
import CommonTable from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import products from "../../dummy-data/products.json";

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
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
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
        <CommonTable data={this.state.products} column={this.column} title={"Products List"}/>
      </Layout>
    );
  }
}

export default Products;
