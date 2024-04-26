import { useContext } from "react";
import "../Styles/Header.css";
import logo from "../assets/404-logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);

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
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="dropdowns">
        <div className="dropdown">
          <span className="dropdown-button">
            Ofertas
            <i className="bi bi-chevron-down"></i>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-link">24 Hrs</li>
              <li className="dropdown-link">Hot-Ofertas</li>
              <li className="dropdown-link">Descuentos</li>
              <li className="dropdown-link">Premium</li>
              <li className="dropdown-link">Subastas</li>
            </ul>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-button">
            <Link to="/products">Todos los productos</Link>
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
            Mi Cuenta
            <i className="bi bi-chevron-down"></i>
          </span>
          <div className="dropdown-menu">
            <ul>
              {!isAuthenticated && (
                <li>
                  <Link to="/login" className="dropdown-link">
                    Login
                  </Link>
                </li>
              )}

              {isAuthenticated && (
                <>
                  <li className="dropdown-link">Historial de Compras</li>
                  <li className="dropdown-link">Mis Datos</li>
                  <li onClick={logout} className="dropdown-link">
                    Cerrar{" "}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
