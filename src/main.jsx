import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./Contexts/basketContext.jsx";
import { UserProvider } from "./Contexts/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
