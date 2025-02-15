import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// const theme = createTheme({
//   fontFamily: "Open Sans, sans-serif",
//   primaryColor: "cyan",
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
