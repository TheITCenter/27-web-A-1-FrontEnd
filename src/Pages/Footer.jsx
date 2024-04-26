import React from "react";
import logo2 from '../assets/logo2.svg'
import insta_logo from '../assets/insta_logo.svg'
import face_logo from '../assets/face_logo.svg'
import mapa from '../assets/maps.svg'
import '../Styles/Footer.css';

const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-column">
        <img class="footer-column" src={logo2} alt="logo2" />
      </div>
      <div class="footer-column">
        <h3>Siguenos en redes</h3>
        <div class="footer-media " > 
          <ul class="columnredes">
          <li>
            <img class=" " src={insta_logo} alt="logo2" />
            <a href="#">Instagram</a>
            </li>
        </ul>
        <ul class="columnredes">
          <li>
            <img class=" " src={face_logo} alt="logo2" />
            <a href="#">Facebook</a>
            </li>
        </ul>
        </div>
      </div>
      <div class="footer-column">
        <h3>Contacto</h3>
        <ul>
          <li><a href="#">Teléfono: 55-25-65-98-98</a></li>
          <li><a href="#">Correo: 404@notfound.com</a></li>
        </ul>
      </div>
      <div class="footer-column">
       <h3>Ubicación</h3>
       <div class="footer-ubi">
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
