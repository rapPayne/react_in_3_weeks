import { Order } from '../types/Order';
import { CartItem } from '../types/CartItem';

const baseUrl = `/api`;
let jwtToken: string | null | undefined = "";

export const getMenuItems = () => {
  const url = `${baseUrl}/menuItems`;
  return fetch(url)
    .then((res: Response) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch menuItems: ${res.status} ${res.statusText}`)
    })
}

export const getOrders = () => {
  const url = `${baseUrl}/orders`;
  return fetch(url, {
    headers: {
      "Authorization": `Bearer ${jwtToken}`,
    },
  })
    .then((res: Response) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch orders: ${res.status} ${res.statusText}`)
    })
}

export const getOrder = (id: number): Promise<Order> => {
  const url = `${baseUrl}/orders/${id}`;
  return fetch(url, {
    headers: {
      "Authorization": `Bearer ${jwtToken}`,
    },
  })
    .then((res: Response) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch order ${id}: ${res.status} ${res.statusText}`)
    })
}


export const login = (username: string, password: string): Promise<any> => {
  const url = `${baseUrl}/login`;
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (res.ok)
        return res
      else
        throw new Error('Bad username or password')
    })
    .then(res => { jwtToken = res.headers.get('Authorization')?.split(' ')[1]; return res; })
    .then(res => res.json())
}

export const register = (user: any): Promise<any> => {
  const url = `${baseUrl}/register`;
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (res.ok)
        return res
      else
        throw new Error('Could not create the new user. Try again')
    })
    .then(res => { jwtToken = res.headers.get('Authorization')?.split(' ')[1]; return res; })
    .then(res => res.json())
}

export const placeOrder = (orderDetails: {
  cart: Array<CartItem>, tip: number | undefined, pan: string | undefined, expiryMonth: number | undefined, expiryYear: number | undefined, cvv: number | undefined, location: string
}): Promise<any> => {
  const url = `${baseUrl}/placeOrder`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(orderDetails)
  })
    .then((res: Response) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't place your order: ${res.status} ${res.statusText}`)
    })
}