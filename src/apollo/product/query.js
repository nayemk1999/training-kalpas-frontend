import { gql } from "apollo-boost";

export const get_all_products = gql`
  query GetAllProducts($limit: Int, $page: Int) {
    getAllProducts(limit: $limit, page: $page) {
      category
      discount
      id
      image
      postedby
      price
      sell
      status
      stock
      title
      createAt
      updateAt
    }
  }
`;

export const get_product = gql`
  query GetProduct($getProductId: String!) {
    getProduct(id: $getProductId) {
      category
      discount
      id
      image
      postedby
      price
      sell
      status
      stock
      title
      createAt
      updateAt
    }
  }
`;

export const delete_product = gql`
  mutation Mutation($deleteProductId: String!) {
    deleteProduct(id: $deleteProductId) {
      message
      success
    }
  }
`;

export const add_product = gql`
  mutation AddProduct($product: AddProduct) {
    addProduct(product: $product) {
      message
      success
    }
  }
`;
