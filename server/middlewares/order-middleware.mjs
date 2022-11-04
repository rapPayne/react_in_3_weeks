// TODO: Maybe this should be more of a route than a middleware. The we wouldn't need the else and next()
import fs from 'fs'
export const placeOrderMiddleware = (req, res, next) => {
  if (req._parsedUrl.path === "/placeOrder" && req.method === "POST") {
    console.log("placing order", res.body);
    // const orders = getOrdersFromDb();
    // //TODO: Process into a real order
    // const newOrder = {
    //   id: getNextOrderId(orders)
    // }
    //TODO: Add to the database
    res.status(200).send({ message: "Order placed", id: 12345 });
  } else {
    next();
  }
}

export const getNextOrderId = (orders) =>
  orders.reduce((prev, curr) => (prev > curr.id) ? prev : curr.id, 0) + 1;
