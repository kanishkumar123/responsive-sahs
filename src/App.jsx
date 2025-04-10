// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { MantineProvider } from "@mantine/core";
import AppRoutes from "./AppRoutes"; // Import new route config
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router basename="/">
        <ScrollToTop />
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </MantineProvider>
  );
};

export default App;
