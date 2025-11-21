import { createRoot } from "react-dom/client";
import { DataBaseProvider } from "../src/Context/DataBaseContext.jsx";
import { ThemeProvider } from "../src/Context/DataContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataBaseProvider>
      <App />
    </DataBaseProvider>
  </ThemeProvider>
);
