import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./context";
import { CartProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer
            closeButton={false}
            autoClose={3000}
            position={"bottom-right"}
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </>
);
