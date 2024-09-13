import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";
import { BookmarkProvider } from "./Context/BookmarkContext ";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookmarkProvider>
        <App />
      </BookmarkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
