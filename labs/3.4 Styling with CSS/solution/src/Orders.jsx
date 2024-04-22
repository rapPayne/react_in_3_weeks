import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from './utilities';
import { getOrderTotal, getNumberOfDiners } from "./utilities";

export function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]); // <-- Add this
  useEffect(() => {
    getOrders()
      .then(res => (console.log(res), res))
      .then(os => setOrders(os))
  }, []);
  return (
    <>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date/Time</th>
            <th>Total</th>
            <th># Guests</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr onClick={() => navigate(`/orders/${order.id}`)} key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderTime}</td>
              <td>{getOrderTotal(order)}</td>
              <td>{getNumberOfDiners(order)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}