import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import logo from "../assets/404-logo.svg";

const registerData = {
  name: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  role: "COSTUMER",
};

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    onInputChange,
    name,
    lastName,
    userName,
    email,
    password,
    phoneNumber,
    isFormValid,
    formState,
  } = useForm(registerData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(formState);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="form-wrapper-register">
      <main className="form-side">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="form-welcome-row">
            <h1>Nuevo por aquí?</h1>
            <h2>Crea una cuenta</h2>
          </div>

          <div className="text-field">
            <label htmlFor="">Nombre</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>

          <div className="text-field">
            <label htmlFor="lastName">Apellido</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Apellido"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
            />
          </div>

          <div className="text-field">
            <label htmlFor="">Teléfono</label>
            <input
              className="input fields__input-fields"
              type="number"
              placeholder="Teléfono"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onInputChange}
            />
          </div>

          <div className="text-field">
            <label htmlFor="email">Email</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="text-field">
            <label htmlFor="userName">Usuario</label>
            <input
              className="input fields__input-fields"
              type="text"
              placeholder="Usuario"
              name="userName"
              value={userName}
              onChange={onInputChange}
            />
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
          </div>

          <button
            className="button is-info"
            disabled={!isFormValid}
            type="submit"
          >
            Registrarse
          </button>

          <div className="my-form__actions">
            <div className="my-form__row">
              <span>¿Ya tienes una cuenta?</span>
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
          <blockquote className="blockquote-text">
            Tu tienda en línea 24/7
          </blockquote>
        </div>
      </aside>
    </div>
  );
}

export default Register;
