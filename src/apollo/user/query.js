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

export const delete_user = gql`
  mutation Mutation($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
      message
      success
    }
  }
`;

export const get_user = gql`
  query GetUser($getUserId: String!) {
    getUser(id: $getUserId) {
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

export const add_user = gql`
  mutation AddUser($user: AddUser) {
    addUser(user: $user) {
      message
      success
    }
  }
`;
