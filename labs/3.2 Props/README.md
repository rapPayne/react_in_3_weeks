# Props
TODO: NOT YET FINISHED
TODO: IF I'M NOT ITERATING CART, DO IT HERE. CAN'T FIND WHERE IT IS HAPPENING.


## Displaying the cart
The cart state variable is in App.js. We'd like to display it in the Cart component so we need to pass it down from App to Cart.

1. Let's prepare Cart to receive props first. Change it to take in props:
```JavaScript
export function Cart(props) {
  const cart = props.cart;
```
2. obviously you'll want to delete the test cart you added earlier. Go ahead and do that.
3. Run and test. You should now be able to see all of the actual cart items.

## Adding to the cart
A few labs ago, you made the *Add* button on the Menu component call a local function. Let's make that function actually add to the cart.

But there's a challenge. The cart state object is in App.js. We can't pass the item from down here in Menu up to App because data cannot flow **up** from a child component to the parent.

<!-- Diagram of the two components -->

We can pass a function down, though!

1. Change Menu.js, adding a props parameter.
```JavaScript
export const Menu = (props) => {
  const addToCart = props.addToCart;
```
2. This will be a problem because of the test function we added earlier. So find the `addToCart` function you added in an earlier lab and just delete it.
3. Run and test. If you click the button on any item and then visit the Cart, you'll see your new item.

## Removing an item from the cart
4. We have a similar issue in the Cart component. It has a button to remove each item from the cart. We've got to pass the `removeFromCart` function down from App to Cart.
5. Go ahead and do that. Pass removeFromCart down from App.js to Cart.
6. Also read it in props in Cart.js.
```JavaScript
const removeFromCart = props.removeFromCart;
```
3. lastly, call it. Find the remove from cart button and call removeFromCart.
```JavaScript
<button onClick={() => removeFromCart(cartItem)}>Remove</button>
```
4. Run and test. See if you can click on the remove button and have it actually remove items.


# Bonus! Decomposing
9. Open Menu.js and find where you're iterating