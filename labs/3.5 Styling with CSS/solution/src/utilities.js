const taxRate = 0.0825;
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

export const getOrder = (id) => {
  const url = `${baseUrl}/orders/${id}`;
  return fetch(url)
    .then(res => { console.log({ res }); return res; })
    .then(res => { if (res.ok) return res; else throw new Error(`${res.status} ${res.statusText}`) })
    .then(res => res.json())
    .catch(err => console.error(`Can't fetch order ${id}`, err))
}

export const login = (username, password) => {
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

export const logout = () => {
  // TODO: Erase the server-side token
}

export const placeOrder = (orderDetails) => {
  const url = `${baseUrl}/placeOrder`;
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(orderDetails)
  })
    .then(res => res.json())
    .catch(err => console.error("Problem placing order.", err));
}



export const getOrderTotal = (order) =>
  toCurrency(order.tax
    + order.tip
    + order.items?.reduce((prev, curr) => prev + curr.price, 0)
  );

export const getNumberOfDiners = (order) => {
  const diners = [];
  let totalDiners = 0;
  order?.items?.forEach((i) => diners.includes(i.firstName ?? "no name") || totalDiners++);
  return totalDiners;
}

export const toCurrency = (cost) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(cost)

export const getCartTotal = (cart) =>
  cart.reduce((prev, curr) => prev + curr.price, 0)

export const calculateTax = (cost) => cost * taxRate;

export const getNextCartItemId = (cart) =>
  cart.reduce((prev, curr) => (prev > curr.id) ? prev : curr.id, 0) + 1;
