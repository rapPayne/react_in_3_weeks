const taxRate = 0.0825;
const baseUrl = `/api`;
export let jwtToken = "";

export const getMenuItems = () => {
  const url = `${baseUrl}/menuItems`;
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch menuItems: ${res.status} ${res.statusText}`)
    })
}

export const getMenuItem = (id) => {
  const url = `${baseUrl}/menuItems/${id}`;
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch menuItem with an id of '${id}': ${res.status} ${res.statusText}`)
    })
}

export const getOrders = () => {
  const url = `${baseUrl}/orders`;
  return fetch(url, {
    headers: {
      "Authorization": `Bearer ${jwtToken}`,
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch orders: ${res.status} ${res.statusText}`)
    })
}

export const getOrder = (id) => {
  const url = `${baseUrl}/orders/${id}`;
  return fetch(url, {
    headers: {
      "Authorization": `Bearer ${jwtToken}`,
    },
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't fetch order ${id}: ${res.status} ${res.statusText}`)
    })
}


export const login = (username, password) => {
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

export const register = (user) => {
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

export const placeOrder = (orderDetails) => {
  const url = `${baseUrl}/placeOrder`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(orderDetails)
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error(`Can't place your order: ${res.status} ${res.statusText}`)
    })
}

export const getOrderTotal = (order) =>
  toCurrency(order.tax
    + order.tip
    + order.items?.reduce((prev, curr) => prev + curr.price, 0)
  );


/**
 * Given an order, return the number of people on this ticket.
 * @param {Order} order 
 * @returns number: How many diners do we think are on this ticket
 */
export const getNumberOfDiners = (order) => {
  const diners = [];
  let totalDiners = 0;
  order.items?.forEach((i) => diners.includes(i.firstName ?? "no name") || totalDiners++);
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
