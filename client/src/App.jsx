import React, { Suspense } from "react";

import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import ModelViewer from './components/ModelViewer';
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
      {/*3d model*/}
      {/* <ModelViewer modelPath={"/3d/garden.glb"} /> */}
    </ApolloProvider>
  );
}

export default App;
