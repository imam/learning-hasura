import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:8989/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "secret",
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const app = document.getElementById("app");
const root = createRoot(app);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
