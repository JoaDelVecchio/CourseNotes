import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      notes={[
        { id: 0, note: "html is good", important: true },
        { id: 1, note: "css sucks", important: false },
        { id: 2, note: "html is good", important: true },
        { id: 3, note: "css sucks", important: false },
        { id: 4, note: "html is good", important: true },
        { id: 5, note: "css sucks", important: false },
      ]}
    />
  </StrictMode>
);
