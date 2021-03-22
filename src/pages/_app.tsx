import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { useApollo } from '../lib/apollo';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo();
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
