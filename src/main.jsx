import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from '../src/Pages/AllProducts.jsx';
import Login from '../src/Pages/Login.jsx';
import App from './App.jsx';
import Gadgets from './Pages/Gadgets.jsx';
import Header from './Pages/Header.jsx';
import { AuthProvider } from './Context/AuthProvider.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Router>
    <AuthProvider> 
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/products/gadgets" element={<Gadgets />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </Router>
 
  </React.StrictMode>
);