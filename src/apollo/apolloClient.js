import ApolloClient from "apollo-boost";

const apolloGraphClient = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

export default apolloGraphClient;