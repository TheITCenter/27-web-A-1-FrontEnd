/* eslint-disable react/prop-types */
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  const login = async (formData) => {
    try {
      const { data } = await axios.post(
        "https://api404notfound.onrender.com/auth/login",
        formData
      );
      localStorage.setItem("token", data.token);
      if (data?.token) {
        setToken(data.token);
        setUser(jwtDecode(data.token));
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      const message = error.response.data.msg;
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const register = async (formData) => {
    try {
      const { data } = await axios.post(
        "https://api404notfound.onrender.com/auth/register",
        formData
      );

      if (data?.token) {
        Swal.fire({
          title: "Cuenta creada exitosamente",
          text: "Favor de iniciar sesión",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/login");
      }
    } catch (error) {
      const message = error.response.data.msg;
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
