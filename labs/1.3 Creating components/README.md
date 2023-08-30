# Creating components
<!-- Time: 15min -->
Now that we have a project created, let's create a few components. Do not be overly concerned with how they lay out, how they are styled or even how they work for now. Just get each rendering.

## Creating the Orders.jsx component
1. Create a new file in src called `Orders.jsx`.

2. Make its contents look like this.
```JavaScript
export function Orders() {
  console.log("Orders");
  return (
  <>
    <h1>Orders</h1>
  </>
  );
}
```

3.	Edit `App.jsx`. Find the `<Menu />` tag. Replace it with the Orders tag (`<Orders />`) so you can see it in the browser. (Remember to import it! Use `import { Orders } from './Orders';`) Look in the console for your log message. This just proves that it is running.

Congrats, you've just created a React component and used it in another component! 

## Creating a few more
Now that you've done it for Menu and Orders, it should be simple to do it for more.

1. Copy Orders.jsx into a new file called Cart.jsx. Of course change the name of the function, the `<h1>`, and console.log() to "Cart".

2. Change App.js to show your new Cart component.

Can you see it in the browser?

3. Great, now do the same for
- Order.jsx (Yes, singular)
- Register.jsx
- Login.jsx

You’re probably thinking “This is cool and all but where are the guts of these components?" You are, aren’t you?

Well, stay tuned! We’re going to do that in the next chapter!
