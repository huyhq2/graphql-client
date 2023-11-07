// apolloClient.ts

import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloLink,
    NormalizedCacheObject,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import { useMemo } from 'react';
  
  let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
  
  function createApolloClient() {
    const httpLink = createHttpLink({
      uri: 'Your GraphQL API endpoint', // Replace with your GraphQL API endpoint
    });
  
    const authLink = setContext((_, { headers }) => {
      // Get the authentication token from cookies or wherever you store it
      const token = ''; // Replace with your authentication token retrieval logic
  
      // Return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });
  
    return new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }
  
  export function initializeApollo(initialState: any = null) {
    const _apolloClient = apolloClient ?? createApolloClient();
  
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state gets hydrated here
    if (initialState) {
      _apolloClient.cache.restore(initialState);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
  
    return _apolloClient;
  }
  
  export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
  }
  