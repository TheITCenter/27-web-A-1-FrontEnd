import { useContext } from 'react';
import '../Styles/Header.css';
import logo from '../assets/404-logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
  const { logout } = useContext(AuthContext); // Obtén la función logout del contexto

  return (
    <nav className='nav-container'>
      <div className="logo">
        <Link to="/"> 
          <div className='logo-img'>
            <img src={logo} alt="Logo" />
          </div> 
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="dropdowns">
        <div className="dropdown">
          <button className="dropdown-button">
            <span>Ofertas</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <button>24 Hrs</button>
            <button>Hot-Ofertas</button>
            <button>Descuentos</button>
            <button>Premium</button>
            <button>Subastas</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            <Link to="/products"><span>Todos los productos</span></Link>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/products/gadgets"><button >Gadgets</button></Link>
            <button>Mobile</button>
            <button>Computadoras</button>
            <button>Tablets</button>
            <button>Consolas</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            <span>Mi Cuenta</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/login"><button>Login</button></Link>
            <button>Historial de Compras</button>
            <button>Mis Datos</button>
            <button onClick={logout}>LogOut</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
