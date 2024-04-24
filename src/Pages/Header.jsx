import '../Styles/Header.css'
import logo from '../assets/404-logo.svg'

const Header = () => {
  return (
    <nav className='nav-container'>
      <div className="logo">
       <div className='logo-img'><img src={logo} alt="Logo" /></div>
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
            <span>Productos</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <button>Gadgets</button>
            <button>Mobile</button>
            <button>Computadoras</button>
            <button>Tablets</button>
            <button>Consolas</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            <span>Cuenta</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="dropdown-menu">
            <button>Usuario</button>
            <button>Favoritos</button>
            <button>Compras</button>
            <button>Ventas</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;