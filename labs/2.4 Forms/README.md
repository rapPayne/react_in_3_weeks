# Forms in React
<!-- Time: 20 minutes -->

## Menu.js
1. Run the app and look at the Cart. Note that it has an item in it because of an earlier lab where we hardcoded it to have a garden salad.

2. Also notice that there are `<input>`s to put the gratuity/tip, the "deliver to" location,  and the credit card info. 

These don't save their data anywhere. Let's fix that. We'll start with the tip.

3. Edit Cart.js and create a state variable:
```JavaScript
const [tip, setTip] = useState(0);
```

4. Find the `<input>` for the tip. Make it look like this.
```JavaScript
<div>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></div>
```
Hint: The `+` sign is there to convert a string to a number.

That was setting the tip, now let's use it!

## Showing the cart totals
1. Still in Cart.js, find the `<section>` that has notes about displaying the TAX_HERE, CART_TOTAL_HERE, and GRAND_TOTAL_HERE. Make it look like this:
```JavaScript
<section>
  <p>Tax: {toCurrency(calculateTax(getCartTotal(cart)))}</p>
  <p>Total: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)))}</p>
  <div>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></div>
  <p>Amount to charge: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)) + (tip || 0))}</p>
</section>
```

2. Obviously you'll need those utility functions. Add these to the top of Cart.js:
```JavaScript
import { calculateTax, getCartTotal, toCurrency, placeOrder as placeOrderToServer } from './utilities';
```

3.  Run and test. You'll know you have it working right when you can change the tip and watch the amount to charge change with it.

## Payment info and Location
Here's a challenge. Try to do the same thing but for the credit card information. We'll give you less instruction this time.

1. Add state variables for `pan`, `expiryMonth`, `expiryYear`, and `cvv`. 
(By the way, the 'pan' is the credit card's primary account number, the 16-digit number and the 'cvv' is the 3-digit code on the back of cards.)

2. Change the `<input>` fields to handle these state variables. (Hint: you'll want to set the `value` property and the `onChange` event.)

3. Edit the `placeOrder` function. Have it console.log() these variables.

4. Run and test, making sure you can enter values and, when you click the "Place order" button, you see them in the console.

## Login

1. Last one for now. Edit Login.js. Add two state variables for
```JavaScript
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
```

2. Find the two textboxes. Make the first change username and the second change password.
```HTML
<input value={username} onChange={e => setUsername(e.target.value)} />
```
and
```HTML
<input value={password} onChange={e => setPassword(e.target.value)} />
```

3. Test it out if you like by console.log()ing the values. We'll use those values later.