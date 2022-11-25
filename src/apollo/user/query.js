import { gql } from "apollo-boost";

export const get_all_users = gql`
  query Query($limit: Int, $page: Int, $filter: String) {
    getAllUsers(limit: $limit, page: $page, filter: $filter) {
      country
      createAt
      email
      firstName
      id
      lastName
      phoneNumber
      status
    }
  }
`;
