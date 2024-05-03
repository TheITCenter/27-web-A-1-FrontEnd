/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className='cart-h2'>Tu carrito está vacío</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {cart.map((product) => (
          <div key={product._id}>
            <h2 className='cart-h2'>{product.name}</h2>
            <p className='cart-h2'>{product.price}</p>
            <button onClick={() => removeFromCart(product._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartModal;