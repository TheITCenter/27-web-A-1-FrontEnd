import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ProductModal from "../Components/ProductModal.jsx";
import "../Styles/AllProducts.css";

const Monitors = () => {
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
<div className="card-container">
{products
  .filter((product) => product.category === "Monitores")
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
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  ))}

  {productModal && selectedProduct && (
    <ProductModal closeModal={closeModal} product={selectedProduct} />
  )}
</div>
  );
};

export default Monitors;
