import { useEffect, useState } from 'react';
import { getOrder, getMenuItems, getNumberOfDiners, getOrderTotal } from './utilities';
import { useParams } from 'react-router-dom';

export function Order() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getOrder(orderId)
      .then(o => setOrder(o)); // <-- Add this line
    getMenuItems()
      .then(mi => setMenuItems(mi)); // <-- And this line
  }, [orderId]);
  console.log({ order, menuItems })
  return (
    <>
      <h2>Order {orderId}</h2>
      <p>Customer: {order?.userId}</p>
      <p>Number of guests: {order && getNumberOfDiners(order)}</p>
      <p>Credit card: {order?.creditCard.PAN}, expiry: {order?.creditCard.expiryMonth}/{order?.creditCard.expiryYear}</p>
      <p>Location: {order?.location}</p>
      <p>Order time: {order?.orderTime.toLocaleString()}</p>
      <table>
        <tbody>
          {order.items?.map(item => (
            <tr key={item.id}>
              <td>{menuItems.find(i => item.itemId === i.id)?.name}</td>
              <td>{item.price}</td>
              <td>(for {item.firstName})</td>
            </tr>
          ))}
          <tr><td>Tax</td><td>{order?.tax}</td></tr>
          <tr><td>Tip</td><td>{order?.tip}</td></tr>
          <tr><td>Total</td><td>{order && getOrderTotal(order)}</td></tr>
        </tbody>
      </table>
    </>
  )
}