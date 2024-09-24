import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EventContextProvider } from './context/eventContext';
import { BlogContextProvider } from "./context/blogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <EventContextProvider>
    <BlogContextProvider>
      <ToastContainer />
      <App />
    </BlogContextProvider>
  </EventContextProvider>
  </BrowserRouter>
);
