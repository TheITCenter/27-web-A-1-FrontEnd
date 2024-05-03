import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import ProductModal from "../Components/ProductModal.jsx";
import "../Styles/AllProducts.css";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext.jsx';

const Mobile = () => {
  const [productModal, setProductModal] = useState(false); 
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setProductModal(true); 
  };

  const closeModal = () => {
    setProductModal(false); 
  };

  const { addToCart } = useContext(CartContext);
  console.log(addToCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api404notfound.onrender.com/products/"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="mobile-container">
{products
  .filter((product) => product.category === "Mobile")
  .map((product) => (
    <Card style={{ width: "18rem" }} key={product._id}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "200px" }}
        onClick={() => openModal(product)} 
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Precio: $ {product.price.toLocaleString()}</Card.Text>
        <button className="btn-primary" onClick={() => addToCart(product)}>Añadir al Carrito</button>

      </Card.Body>
    </Card>
  ))}

  {productModal && selectedProduct && (
    <ProductModal closeModal={closeModal} product={selectedProduct} />
  )}
</div>
  );
};

export default Mobile;
