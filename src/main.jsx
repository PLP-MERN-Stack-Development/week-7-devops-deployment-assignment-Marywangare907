// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Chat from "./pages/chat";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
