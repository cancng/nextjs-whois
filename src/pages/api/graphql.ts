import { ApolloServer, gql } from 'apollo-server-micro';
import { PageConfig } from 'next';
import typeDefs from './schema';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
