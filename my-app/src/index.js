import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Sign from "./pages/sign-in";
import User from "./pages/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
