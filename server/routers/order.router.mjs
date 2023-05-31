import { readDatabase, saveDatabase } from '../repository.mjs';


export const orderRouter = (app) => {
  app.get("/orders", getOrdersRoute);
  app.get("/orders/current", getCurrentOrdersRoute);
  app.get("/orders/:id", getOrderRoute);
  app.post("/placeOrder", placeOrderRoute);
}

const placeOrderRoute = (req, res) => {
  let user = req.user;
  console.log("placing order", res.body);
  if (!user) {
    res.status(403).send("Please log in before trying to place a new order")
    return;
  }
  const db = readDatabase();
  //Process into a real order
  const orderId = getNextOrderId(db.orders)
  const newOrder = {
    id: orderId,
    ...req.body.order,
  }
  //Add to the database
  db.orders.push(newOrder);
  saveDatabase(db);
  res.status(200).send({ message: "Order placed", id: orderId });
}

/**
 * Gets a single order by id. Appends the full menuItems to the order.
 */
const getOrderRoute = (req, res) => {
  let user = req.user;
  let orderId = req.params.id;
  console.log(`Gettting a single order ${orderId}. user id is ${user?.id}`);
  if (!user && !req.skipAuth) {
    res.status(403).send("Please log in before trying to view your order")
    return;
  }
  const orders = readDatabase().orders;
  const order = orders.find(o => o.id === +orderId);
  if (!order) {
    res.status(404).send("Order not found");
    return;
  }
  const menuItems = readDatabase().menuItems;
  order.items = order.items?.map(item => ({
    ...item, ...menuItems.find(mi => mi.id === item.id)
  }));
  if (req.skipAuth || user?.adminUser || user?.isServer || order?.userId === +user?.id)
    res.send(order);
  else {
    res.status(403).send("That's not your order. You can't see it.")
  }
}

/**
 * All orders that are not complete from all users. This is great
 * for managers, servers, and the kitchen.
 */
const getCurrentOrdersRoute = (req, res) => {
  let user = req.user;
  console.log("user id is", user?.id)
  if (!req.skipAuth && !user) {
    res.status(403).send("Please log in before trying to view orders")
    return;
  }
  const orders = readDatabase().orders.filter(o => o.status !== "completed");
  if (req.skipAuth || user?.adminUser || user?.isServer)
    res.send(orders);
  else {
    res.send(orders.filter(o => o.userId === +user?.id))
  }
}

/**
 * Orders for the current user. If the user is an admin user, it
 * returns all orders for all users.
 */
const getOrdersRoute = (req, res) => {
  let user = req.user;
  if (!req.skipAuth && !user) {
    res.status(403).send();
    return;
  }
  const orders = readDatabase().orders;
  if (req.skipAuth || user?.adminUser || user?.isServer)
    res.send(orders);
  else {
    res.send(orders.filter(o => o.userId === +user?.id))
  }
}

const getNextOrderId = (orders) =>
  orders.reduce((prev, curr) => (prev > curr.id) ? prev : curr.id, 0) + 1;

