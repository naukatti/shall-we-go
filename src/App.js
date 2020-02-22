import React from "react";
import "./index.css";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import BusRoutes from "./BusRoutes"
import styled from "styled-components";


const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="MainElement">
        <h1>Let's go to work!</h1>
        <BusRoutes />
      </div>
    </ApolloProvider>
  );
}

export default App;
