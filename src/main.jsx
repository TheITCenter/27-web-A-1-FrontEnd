import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './AllProducts.jsx';
import App from './App.jsx';
import Gadgets from './Pages/Gadgets.jsx';
import Header from './Pages/Header.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/products/gadgets" element={<Gadgets />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </Router>
  </React.StrictMode>
);