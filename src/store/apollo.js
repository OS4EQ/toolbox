import { ApolloClient } from 'react-apollo';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server
});

export default apolloClient;
