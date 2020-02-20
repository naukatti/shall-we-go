import React from "react";
import "./App.css";
import "./index.css";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import SearchForm from "./SearchForm"

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Noora's Bus App</h1>
      <h2>Eficode and Back Again</h2>
      <SearchForm />
    </ApolloProvider>
  );
}

export default App;
