import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "../src/Pages/AllProducts.jsx";
import Gadgets from "./Pages/Gadgets.jsx";
import Consolas from "./Pages/Consolas.jsx";
import Monitors from "./Pages/Monitors.jsx";
import Mobile from "./Pages/Mobile.jsx";
import Tablets from "./Pages/Tablets.jsx";
import PCs from "./Pages/PCs.jsx";
import Login from "../src/Pages/Login.jsx";
import Header from "./Pages/Header.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import "./index.css";
import Footer from "./Pages/Footer.jsx";
import Register from "./Pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="*" element={<App />} />
          <Route path="/products/gadgets" element={<Gadgets />} />
          <Route path="/products/consolas" element={<Consolas />} />
          <Route path="/products/mobile" element={<Mobile />} />
          <Route path="/products/monitors" element={<Monitors />} />
          <Route path="/products/tablets" element={<Tablets />} />
          <Route path="/products/pc" element={<PCs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
