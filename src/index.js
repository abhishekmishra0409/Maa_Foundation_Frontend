import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EventContextProvider } from "./context/eventContext";
import { BlogContextProvider } from "./context/blogContext";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EventContextProvider>
      <BlogContextProvider>
        <App />
        <ToastContainer position="top-center" autoClose={3000} />
      </BlogContextProvider>
    </EventContextProvider>
  </BrowserRouter>
);
