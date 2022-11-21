# useState
<!-- Time: 20 min -->


## Watching useState in action in Menu.js
1. Edit Menu.js. Remember, it says this:
```JavaScript
export const Menu = ({ addToCart }: Props) => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  ```
2. Study that for a minute, looking at the useEffect and useState to see if you understand how it works.

After our Ajax call to get the menuItems has returned, it is setting the menuItems in state and rerendering the view. That's how the user sees the menu items.

Got it? Now let's do an easy one together.

## Creating and setting the cart
3. Edit App.js and add these state variables.
```JavaScript
const [cart, setCart] = useState([]);
const [user, setUser] = useState({});
console.log({ cart });
```
Remember to `import { useState } from 'react';`.

4. Add these to App.js. They will need to be **inside** the App function.
```JavaScript
// Converts a menuItem to a cartItem and adds it to the cart.
function addToCart(menuItem) {
  const cartItem = {
    ...menuItem,
    itemId: menuItem.id,
    id: getNextCartItemId(cart),
  };
  setCart([...cart, cartItem]);
}
// Removes the provided item from the cart
function removeFromCart(cartItem) {
  setCart(cart.filter(oi => oi !== cartItem));
}
// Replaces an item in the cart. 
function changeCartItem(newCartItem) {
  const newCart = cart.map(ci => ci.id === newCartItem.id ? newCartItem : ci);
  setCart(newCart);
}
```
You'll also need to `import { getNextCartItemId } from './utilities';`

5. Study these for a minute. Notice how they each call `setcart`, replacing the entire cart with a modified *copy* of that cart.

6. Let's do a quick test. Add this to the component.
```JavaScript
useEffect(() => {
  addToCart({
      id: 17,
      name: "Test item 1",
      category: "entrees",
      price: 10.54,
    });
}, []);
```
5. Run and test. Do you see the item in your test cart? Cool. We'll need this later.

## Saving an order to state
In Order.js we're reading the order already. Now let's write it to state.
1. Add two state variables, "order" and "menuItems". 
```JavaScript
const [ order, setOrder ] = useState({});
const [ menuItems, setMenuItems ] = useState([]);
```
2. And let's use them. 
```JavaScript
useEffect(() => {
  getOrder(orderId)
    .then(o => setOrder(o)); // <-- Add this line
  getMenuItems()
    .then(mi => setMenuItems(mi)); // <-- And this line
}, [orderId]);
```
3. Feel free to `console.log({order, menuItems})` to make sure they're reading data.

## Saving orders to state
Let's do one last one. 

1.  Edit Orders.js. Change the reader from this
```JavaScript
export function Orders() {
  useEffect(() => {
    getOrders()
  }, []);
```
to this
```JavaScript
export function Orders() {
  const [orders, setOrders] = useState([]); // <-- Add this
  useEffect(() => {
    getOrders()
      .then(os => setOrders(os))  // <-- And this
  }, []);
```


You're done!