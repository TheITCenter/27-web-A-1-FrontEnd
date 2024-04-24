import React from 'react'
import ReactDOM from 'react-dom/client'
import AllProducts from './AllProducts.jsx'
import Header from './Pages/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AllProducts />
  </React.StrictMode>,
)
