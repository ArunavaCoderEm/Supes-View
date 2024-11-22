import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.tsx";
import CustomProvider from "./Context/CustomProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <CustomProvider>
      <App />
    </CustomProvider>
);
