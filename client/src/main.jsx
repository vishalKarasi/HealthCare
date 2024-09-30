import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils.css";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@context/ThemeContext.jsx";
import { AuthProvider } from "@context/authContext";
import { ServiceProvider } from "@context/servicesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ServiceProvider>
          <App />
        </ServiceProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
