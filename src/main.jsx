import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";
import { BookmarkProvider } from "./Context/BookmarkContext ";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);
