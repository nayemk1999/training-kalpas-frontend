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
