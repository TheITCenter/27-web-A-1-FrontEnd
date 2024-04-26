import  { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import prod01 from '../src/assets/prod-01.jpg';
import prod02 from '../src/assets/prod-02.jpg';
import "../src/Styles/Landing.css";


const App = () => {
  const [name, setName] = useState('');

  useEffect(() => { //OJO aqui puse un useEffect para que se modifique la renderizacion del componente y nos traiga el nombre de usuario  
    
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token); 
        if (decodedToken) {
          const { name } = decodedToken; 
          setName(name); 
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  return (
<div className="App">
      <section className="hero">
        <div className="container">
          <h2>Encuentra los mejores productos</h2>
          <p>Descubre nuestra amplia selección de productos al mejor precio.</p>
          <a href="#" className="btn">Explorar productos</a>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Productos destacados</h2>
          <div className="product">
            <img src={prod01} alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="btn">Ver detalle</a>
          </div>
          <div className="product">
            <img src={prod02} alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="btn">Ver detalle</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
