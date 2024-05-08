import "../Styles/Header.css";
import logo from "../assets/404-logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import cart from "../assets/cart.svg";
import { useContext, useState } from "react";
import { SearchTermContext } from '../Context/SearchContext.jsx';

import CartModal from "../Components/CartModal";

const Header = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { searchTerm, handleSearchChange } = useContext(SearchTermContext);

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">
          <div className="logo-img">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
      </div>
      <h2>TU TIENDA EN LINEA 24 / 7</h2>
      <div className="search-bar">
        <input type="search" placeholder="Busca por nombre de producto o categoría..." value={searchTerm} onChange={handleSearchChange} />
      
      </div>

      <div className="dropdowns">
        <div className="dropdown">
          <span className="dropdown-button">
            <Link to="/products">Todos los productos</Link>
            <i className="bi bi-chevron-down"></i>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li>
                <Link to="/products/gadgets" className="dropdown-link">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link to="/products/consolas" className="dropdown-link">
                  Consolas
                </Link>
              </li>
              <li>
                <Link to="/products/mobile" className="dropdown-link">
                  Mobile
                </Link>
              </li>
              <li>
                <Link to="/products/monitors" className="dropdown-link">
                  Monitors
                </Link>
              </li>
              <li>
                <Link to="/products/tablets" className="dropdown-link">
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="/products/pc" className="dropdown-link">
                  PC
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-button">
            {isAuthenticated ? (
              "Mi Cuenta"
            ) : (
              <Link to="/login" className="dropdown-link">
                Iniciar Sesión
              </Link>
            )}
            <i className="bi bi-chevron-down"></i>
          </span>
          {isAuthenticated && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/myorders" className="dropdown-link">
                    Mis Compras
                  </Link>
                </li>
                <li className="dropdown-link">Mis Datos</li>
                <li onClick={logout} className="dropdown-link">
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
        </div>
        <div onClick={() => setIsCartModalOpen(true)}>
          <img className="cart" src={cart} alt="cart-svg" />
        </div>
        {isCartModalOpen && (
          <CartModal onClose={() => setIsCartModalOpen(false)} />
        )}
      </div>
    </nav>
  );
};

export default Header;