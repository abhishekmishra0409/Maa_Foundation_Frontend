import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EventContextProvider } from './context/eventContext';
import { BlogContextProvider } from "./context/blogContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <EventContextProvider>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </EventContextProvider>
  </BrowserRouter>
);
