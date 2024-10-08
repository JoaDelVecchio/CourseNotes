import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      notes={[
        { id: 0, note: "html is difficult", important: true },
        {
          id: 1,
          note: "Boostrap and tailwind are css frameworks",
          important: false,
        },
        {
          id: 2,
          note: "React was created by facebook engineers",
          important: true,
        },
        {
          id: 3,
          note: "Python is used mostly for AI development",
          important: false,
        },
        {
          id: 4,
          note: "Javascript is the web development king",
          important: true,
        },
        {
          id: 5,
          note: "Netlify is a tool to deploy websites",
          important: false,
        },
      ]}
    />
  </StrictMode>
);
