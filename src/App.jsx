import  { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => { //OJO aqui puse un useEffect para que se modifique la renderizacion del componente y nos traiga el nombre de usuario  
    
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token); 
        if (decodedToken) {
          const { userName } = decodedToken; 
          setUserName(userName); 
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  return (
    <div>
      {userName ? (
        <div>Bienvenido {userName}</div>
      ) : (
        <div>AQUI VA LA LANDING</div>
      )}
    </div>
  );
};

export default App;
