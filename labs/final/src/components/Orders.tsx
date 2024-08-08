import { useState, useEffect } from 'react'
import { Order as OrderType } from '../types/Order';
import { getOrders } from '../data/repository';
import { getOrderTotal, getNumberOfDiners } from "../data/utilities";
import './Orders.css';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([] as OrderType[]);
  useEffect(() => {
    getOrders()
      .then((res) => { console.log(res); return res; })
      .then((res: []) => res.map((o: OrderType) => ({ ...o, orderTime: new Date(o.orderTime), pickupTime: new Date(o.pickupTime) })))
      .then((o: OrderType[]) => setOrders(o))
      .catch(err => console.error(err))
  }, []);

  return (
    <section className='Orders'>
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
    </section>
  )
}

