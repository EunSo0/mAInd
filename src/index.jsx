/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <Header />
          <App />
          <Footer />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
