import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/index/index";
import Sign from "./pages/sign-in";
import User from "./pages/user";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<Sign />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
