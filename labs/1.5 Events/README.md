# Events
<!-- Time: 10min -->
<!-- In form fields (Maybe in Cart.js - PAN,CVV,EXPIRY, location), have them onChange={e=>sayHello(e.target.value)} -->

## Wiring up the *Add* button click
1. Edit Menu.js. Find the *Add* button.
2. Put an `onClick` event on that button. It should call a function called `addToCart(menuItem)`

Of course this won't compile because `addToCart` doesn't exist yet. Let's fix that.

3. Write this anywhere inside the Menu function. 
```JavaScript
function addToCart(menuItem) {
  console.log(`Adding ${menuItem.name} to the cart`);
}
```

Yes, this is a function inside of a function. Welcome to JavaScript. 😜

4. Run and test. You've got it right when you can click the button and see your message in the [console](../../cheatsheet.md/To-see-something-in-the-browser-console).

## Wiring the *Place Order* button
Let's do another one just like the *Add* button above. But this one is in Cart.js.

5. Edit Cart.js. Find the *Place order* button.
6. Make its `onClick` handler call a new function called  `placeOrder`. Do not pass any values into the placeOrder function.
7. Just like earlier, that function doesn't exist yet. Go ahead and create it. It should simply console.log() a message of your choosing.
8. Run and test. Make sure you can see your message.

## Wiring the *Log in* button
Nice. Let's do a third, but this time with even fewer instructions.

9.  Edit Login.js. Make the button console.log() a message.
10.  Test your code to make sure it works.

Congratulations, you're finished!