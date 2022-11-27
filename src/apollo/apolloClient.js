import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloGraphClient = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache()
});

export default apolloGraphClient;