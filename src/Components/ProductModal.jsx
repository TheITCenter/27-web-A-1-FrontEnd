import PropTypes from "prop-types";
import "../Pages/AllProducts.jsx"; 

const ProductModal = ({ closeModal, product }) => {
  const closeModalButton = () => {
    closeModal(); 
  };

  return ( 
  
  <div className="modal">
  <div className="modal-content">
    <span className="close" onClick={closeModalButton}>
      &times;
    </span>
    <h2 className="modal-title">{product.name}</h2>
    <div>carrousel</div>
    <p className="modal-description">{product.description}</p>
    <button className="btn-primary">Comprar</button>
  </div>
</div>
);
};


ProductModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired, 
};

export default ProductModal;
