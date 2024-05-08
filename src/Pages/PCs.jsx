import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import ProductModal from "../Components/ProductModal.jsx";
import { CartContext } from '../Context/CartContext.jsx';
import { SearchTermContext } from '../Context/SearchContext.jsx';
import "../Styles/AllProducts.css";

const PCs = () => {
  const [productModal, setProductModal] = useState(false); 
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { searchTerm } = useContext(SearchTermContext);
  const { addToCart } = useContext(CartContext);

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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) && product.category === "PC"
  );

  return (
    <div className="pc-container">
      {filteredProducts.map((product) => (
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

export default PCs;