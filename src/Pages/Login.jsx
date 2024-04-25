import "../Styles/Login.css";
import logo from "../assets/404-logo.svg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const loginData = {
  userName: "",
  password: "",
};
function Login() {
  const { login } = useContext(AuthContext);

  const { onInputChange, userName, password, isFormValid, formState } =
    useForm(loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formState);
  };

  return (
    <div className="form-wrapper">
      <main className="form-side">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="form-welcome-row">
            <h1>Bienvenido</h1>
            <h2>Inicio de sesión</h2>
          </div>

          <div className="socials-row">
            <a href="#" title="Continuar con Apple">
              <img src={apple} alt="Apple" />
              Continuar con Apple ID
            </a>
          </div>
          <div className="socials-row">
            <a href="#" title="Continuar con Google">
              <img src={google} alt="Google" />
              Continuar con Google
            </a>
          </div>
         
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="email">Nombre de Usuario</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Usuario"
              name="userName"
              value={userName}
              onChange={onInputChange}
            />
            <div className="error-message">Formato de email incorrecto</div>
          </div>
          <div className="text-field">
            <label htmlFor="password">Contraseña</label>
            <input
              className="input fields__input-fields"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <div className="error-message">
              Mínimo 6 caracteres, al menos 1 letra y 1 número
            </div>
          </div>
          <button
            className="button is-info"
            disabled={!isFormValid}
            type="submit"
          >
            Login
          </button>
         
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>¿Aún no tienes cuenta?</span>
              <Link to="/register" title="Registrarse">
                Regístrate ahora
              </Link>
            </div>
            <div className="my-form__row">
              <a href="#" title="Restablecer contraseña">
                ¿Olvidaste tu contraseña?
              </a>
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

export default Login;
