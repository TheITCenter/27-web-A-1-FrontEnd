import PropTypes from "prop-types";
import "../Pages/AllProducts.jsx"; 
import ModelCarrousel from "./ModelCarrousel.jsx";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext.jsx';
import { toast, ToastContainer } from 'react-toastify';

const ProductModal = ({ closeModal, product }) => {
  const closeModalButton = () => {
    closeModal(); 
  };

  const { addToCart } = useContext(CartContext);

 const handleAddToCart = (product) => {
    addToCart(product);
    toast(`Se ha agregado ${product.name} al carrito`);
  };

  return ( 
  
  <div className="modal">
  <div className="modal-content">
    <span className="close" onClick={closeModalButton}>
      &times;
    </span>
    <h2 className="modal-title">{product.name}</h2>
    <div> <ModelCarrousel /> </div>
    <p className="modal-description">{product.description}</p>
    <button className="btn-primary" onClick={() => handleAddToCart(product)}>Añadir al Carrito</button>
  </div>
</div>
);
};
<ToastContainer />


ProductModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired, 
};

export default ProductModal;
