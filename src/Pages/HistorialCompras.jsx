import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../Styles/Historial.css';

export const HistorialCompras = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  const userName = decoded.userName;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://api404notfound.onrender.com/orders/${userName}`);
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, [userName]);

  return (
<div>
      <h1 style={{ color: 'white', marginBottom: '100px', marginTop: "80px", fontSize: '50px' }}>{userName}, Bienvenido a tu historial de compras</h1>
      {orders.length === 0 ? (
        <p style={{ color: 'white', fontSize: '20px'}}>Aún no has realizado ninguna compra.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id}>
            <div className="order-container">
              <h2 className='order-id'>Orden: {order._id}</h2>
              {order.items.map(item => (
                <div key={item._id} className="order-container">
                  <p className='order-items'>{item.quantity} {item.name}</p>
                  <p className='order-items'>Precio: {item.price.toLocaleString("es-MX")}</p>
                </div>
              ))}
              <p className='order-total'>Total: {order.total.toLocaleString("es-MX")}</p>
            </div>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-line"></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
