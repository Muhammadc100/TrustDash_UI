import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PolarisProvider } from "./components/PolarisProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PolarisProvider>
      <App />
    </PolarisProvider>
  </StrictMode>
);
