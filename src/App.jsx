import  { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

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
    <div>
      {name ? (
        <div>Bienvenido {name}</div>
      ) : (
        <div>AQUI VA LA LANDING</div>
      )}
    </div>
  );
};

export default App;
