import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Order as OrderType } from '../types/Order';
import { getMenuItems, getOrder } from "../data/repository";
import { getNumberOfDiners, getOrderTotal } from "../data/utilities";
import { MenuItem } from "../types/MenuItem";

export const Order = () => {
  const orderId: number = +(useParams().orderId || 0);
  const [order, setOrder] = useState<OrderType>();
  const [menuItems, setMenuItems] = useState<Array<MenuItem>>();
  useEffect(() => {
    getOrder(orderId)
      .then(o => setOrder(o))
      .catch(err => console.log(err));
    getMenuItems()
      .then(mi => setMenuItems(mi));
  }, [orderId]);
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
          {order?.items.map(item => (
            <tr key={item.cartItemId}>
              <td>{getMenuItem(item.itemId)?.name}</td>
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
  function getMenuItem(id: number): MenuItem | undefined {
    return menuItems?.find(mi => mi.id === id)
  }
}
