//DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//APP
import App from "./App";

const client = new ApolloClient({
  uri: "https://petgram-server-clgg.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("App")
);
