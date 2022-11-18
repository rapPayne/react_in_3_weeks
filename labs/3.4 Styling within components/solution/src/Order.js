import { useEffect, useState } from 'react';
import { getOrder, getMenuItems, getNumberOfDiners, getOrderTotal, toCurrency } from './utilities';
import { useParams } from 'react-router-dom';
export function Order() {
  const { orderId } = useParams(); // <-Add this line
  console.log("Order", orderId);
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
      <h1>This is your order </h1>
      <p>Order number: {orderId}</p>
      <p>Customer: {order.userId}</p>
      <p>Number of guests: {getNumberOfDiners(order)}</p>
      <p>Credit card: {order.creditCard?.PAN}, expiry: {order.creditCard?.expiryMonth}/{order.creditCard?.expiryYear}</p>
      <p>Location: {order.location}</p>
      <p>Order time: {order.orderTime}</p>
      <table>
        <tbody>
          {order?.items?.map(cartItem => (
            <tr key={cartItem.id}>
              <td>{getMenuItemName(cartItem.id)}</td>
              <td>{toCurrency(cartItem.price)}</td>
              <td>(for {cartItem.firstName})</td>
            </tr>
          ))}
          <tr><td>Tax</td><td>{toCurrency(order.tax)}</td></tr>
          <tr><td>Tip</td><td>{toCurrency(order.tip)}</td></tr>
          <tr><td>Total</td><td>{getOrderTotal(order)}</td></tr>
        </tbody>
      </table>
    </>
  )
  function getMenuItemName(id) {
    return menuItems.find(mi => mi.id === id)?.name || "Can't find item name"
  }

}