import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';

export default function createApolloClient() {
  const httpLink = new HttpLink({
    uri: '/api/graphql',
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo() {
  return initializeApollo();
}
