/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import close from "../assets/close-red.svg";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "../Styles/Cart.css";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, setCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext); // traigo el conteto de CartContext

  const handleCheckout = async () => {
    // creo una funcion para hacer el check out.. aqui estoy obteniendo el token del local storage y lo estoy decodeando para extraer el userName, despues hago un mapeo del carrito para obtener los datos para poder ahcer el posteo de acuerdo a el schema del back y creo la orden con el objeto de los productos, el userName y el total de la compra
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userName = decoded.userName;

    const items = cart.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const order = {
      userName,
      items,
      total: calculateTotal(),
    };

    const orderJSON = JSON.stringify(order);
    console.log(orderJSON); // este log sobra, pero ayuda para ver que esta resolviendo el checkout

    try {
      const response = await axios.post(
        "https://api404notfound.onrender.com/orders/",
        order,
        {}
      );

      if (response.status !== 200) {
        throw new Error("Error al crear la orden");
      }

      localStorage.removeItem("cart"); // cuando la orden es exitosa se borra el carrito del local storage y se limpia por eso se deja el setcart con un objeto vacio

      setCart([]);

      // Mostrar un toast
      toast("Tu orden ha sido confirmada");
    } catch (error) {
      console.error("Error:", error);
      toast("Error al crear la orden");
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  if (cart.length === 0) {
    return (
      <div className="cart-modal">
        <div className="cart-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className="cart-text">Tu carrito está vacío</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1 className="cart-title">Tu carrito</h1>
        {cart.map((product) => (
          <div
            key={product._id}
            className="cart-item"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img className="cart-img" src={product.image} alt={product.name} />
            <h2 className="cart-text">{product.name}</h2>
            <div className="quantity-btn">
              <button onClick={() => decreaseQuantity(product._id)}>-</button>
              <p className="cart-text">{product.quantity}</p>
              <button onClick={() => increaseQuantity(product._id)}>+</button>
            </div>
            <p className="cart-text">
              $ {(product.price * product.quantity).toLocaleString("es-MX")}
            </p>

            <img
              src={close}
              alt=""
              className="product-remove"
              onClick={() => removeFromCart(product._id)}
            />
          </div>
        ))}
        <div className="cart-total">
          <h2 className="cart-text-total">
            Total: $ {calculateTotal().toLocaleString("es-MX")}
          </h2>
          <button className="btn-primary" onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
