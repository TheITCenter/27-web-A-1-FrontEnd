
import logo2 from '../assets/logo2.svg'
import insta_logo from '../assets/insta_logo.svg'
import face_logo from '../assets/face_logo.svg'
import mapa from '../assets/maps.svg'
import '../Styles/Footer.css';

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-content">
      <div className="footer-column">
        <img className="footer-column" src={logo2} alt="logo2" />
      </div>
      <div className="footer-column">
        <h3>Siguenos en redes</h3>
        <div className="footer-media " > 
          <ul className="columnredes">
          <li>
            <img className=" " src={insta_logo} alt="logo2" />
            <a href="#">Instagram</a>
            </li>
        </ul>
        <ul className="columnredes">
          <li>
            <img className=" " src={face_logo} alt="logo2" />
            <a href="#">Facebook</a>
            </li>
        </ul>
        </div>
      </div>
      <div className="footer-column">
        <h3>Contacto</h3>
        <ul>
          <li><a href="#">Teléfono: 55-25-65-98-98</a></li>
          <li><a href="#">Correo: 404@notfound.com</a></li>
        </ul>
      </div>
      <div className="footer-column">
       <h3>Ubicación</h3>
       <div className="footer-ubi">
       <img  src={mapa} alt="logo2" />
       <a>Matriz</a>
       </div>
      </div>
    </div>
  </div>
  <small>&copy; 2024 Todos los derechos reservados.</small>
</footer>
  );
};

export default Footer;
