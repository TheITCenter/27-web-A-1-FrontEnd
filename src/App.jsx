import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button} from 'react-bootstrap';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api404notfound.onrender.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card-test'>
    {products.map(product => (
      <Card style={{ width: '18rem' }} key={product._id}>
        <Card.Img variant="top" src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
{/*           <Card.Text>{product.description}</Card.Text> */}
          <Card.Text>Precio: $ {product.price.toLocaleString()}</Card.Text>
          <Button variant="primary">Anadir al carrito</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  
  );
}



export default App;
