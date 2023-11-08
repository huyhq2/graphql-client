import "bootstrap/dist/css/bootstrap.css";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloGraphql/apolloClient";
import { AppProps } from "next/app";

import Navbar from "./components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
