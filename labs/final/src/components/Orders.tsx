import { useState, useEffect } from 'react'
import { Order as OrderType } from '../types/Order';
import { getOrders } from '../data/repository';
import { getOrderTotal, getNumberOfDiners } from "../data/utilities";

import { useNavigate } from 'react-router-dom';
export const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders]: [OrderType[], any] = useState([]);
  useEffect(() => {
    getOrders()
      .then((res: any) => { console.log(res); return res; })
      .then((res: Array<any>) => res.map((o: any) => ({ ...o, orderTime: new Date(o.orderTime), pickupTime: new Date(o.pickupTime) })))
      .then((o: OrderType[]) => setOrders(o))
      .catch(err => console.error(err))
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
          {orders?.map((order: OrderType) => (
            <tr onClick={() => navigate(`/orders/${order.id}`)} key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderTime.toLocaleString()}</td>
              <td>{getOrderTotal(order)}</td>
              <td>{getNumberOfDiners(order)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

