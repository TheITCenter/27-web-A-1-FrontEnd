import "../Styles/Login.css";
import logo from "../assets/404-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm.jsx";

const registerData = {
  Name: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",  
  password: "",  
};
function Register() {
  const { register } = useContext(AuthContext);

  const { onInputChange, name, userName, lastName, email, password, phoneNumber, isFormValid, formState } =
    useForm(registerData);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formState);
  };

  return (
    <div className="form-wrapper">
      <main className="form-side">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="form-welcome-row">
            <h1>Nuevo por aquí?</h1>
            <h2>Crea una cuenta</h2>
          </div>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="">Nombre</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Usuario"
              name="name"
              value={name}
              onChange={onInputChange}
            />            
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="email">Apellido</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
            />            
          </div>
          <div className="text-field">
            <label htmlFor="email">Usuario</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Usuario"
              name="userName"
              value={userName}
              onChange={onInputChange}
            />            
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>                 
          <div className="text-field">
            <label htmlFor="">Contraseña</label>
            <input
              className="input fields__input-fields"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="">Phone</label>
            <input
              className="input fields__input-fields"
              type="number"
              placeholder="Telefono"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onInputChange}
            />          
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="email">email</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />            
          </div>            
          </div>
          <button
            className="button is-info"
            disabled={!isFormValid}
            type="submit"
          >Sign In</button>         
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>¿Ya tienes cuenta?</span>
              <Link to="/login" title="Login">
                Inicia Sesión
              </Link>
            </div>            
          </div>
        </form>
      </main>
      <aside className="info-side">
        <div className="blockquote-wrapper">
          <img src={logo} alt="Returns" className="returns" />
          <blockquote className="blockquote-text">Tu tienda en línea 24/7</blockquote>
        </div>
      </aside>
    </div>
  );
}

export default Register;