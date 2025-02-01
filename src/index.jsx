import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApolloProviderWrapper from "./apollo/ApolloProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProviderWrapper>
    <App />
  </ApolloProviderWrapper>
);
