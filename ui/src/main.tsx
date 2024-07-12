import React from "react";
import ReactDOM from "react-dom/client";
import VisibilityProvider from "@/providers/VisibiltyProvider.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>
);
