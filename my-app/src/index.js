import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import Layout from "./components/Layout";
import Index from "./pages/index";
import Sign from "./pages/sign-in";
import User from "./pages/user";
import { store } from "./stores/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<Sign />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
);
