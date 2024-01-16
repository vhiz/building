import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { DarkContextProvider } from "./context/DarkMode.jsx";

const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkContextProvider>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </DarkContextProvider>
  </React.StrictMode>
);
