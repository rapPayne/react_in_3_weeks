import { Order } from '../types/Order';
import { CartItem } from '../types/CartItem';

const baseUrl = `/api`;

export const getMenuItems = () => {
  const url = `${baseUrl}/menuItems`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.error("Can't fetch menuItems", err))
}

export const getOrders = () => {
  const url = `${baseUrl}/orders`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.error("Can't fetch orders", err))
}

export const getOrder = (id: number): Promise<Order> => {
  const url = `${baseUrl}/orders/${id}`;
  return fetch(url)
    .then(res => { console.log({ res }); return res; })
    .then(res => { if (res.ok) return res; else throw new Error(`${res.status} ${res.statusText}`) })
    .then(res => res.json())
    .catch(err => console.error(`Can't fetch order ${id}`, err))
}

// export const login = (username: string, password: string) => {
//   const url = `${baseUrl}/login`;
//   return fetch(url, {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ username, password })
//   })
//     .then(res => res.json())
//     .catch(err => console.error("Problem logging in.", err));
// }

export const login = (username: string, password: string): Promise<any> => {
  const url = `${baseUrl}/login`;
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (res.ok)
        return res
      else
        throw new Error('Bad username or password')
    })
    .then(res => res.json())
}

export const placeOrder = (orderDetails: {
  cart: Array<CartItem>, tip: number | undefined, pan: string | undefined, expiryMonth: number | undefined, expiryYear: number | undefined, cvv: number | undefined, location: string
}): Promise<any> => {
  const url = `${baseUrl}/placeOrder`;
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(orderDetails)
  })
    .then(res => res.json())
    .catch(err => console.error("Problem placing order.", err));
}