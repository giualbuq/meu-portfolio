import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css"; // importa o global que já puxa o theme

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
