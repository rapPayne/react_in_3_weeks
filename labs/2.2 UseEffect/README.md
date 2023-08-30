# useEffect
<!-- Time: 15 min -->
This lab will help us get ready to read Ajax data from a server.

1. Edit Menu.js. Notice that the code we provided to you has a useEffect. Take a minute to study it.
```JavaScript
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
```
Now that we've talked about it, you know that the `useEffect` is there so the fetch will be made __only__ the first time this component is loaded and not each time it's rerendered. 
 
## Order
1. In Order.js, we're getting the orderId from a route parameter. Let's add a useEffect similar to the one in App.js to get the one order from our API server.

2. Edit Order.js. Add this inside the function.
```JavaScript
  useEffect(() => {
    getOrder(orderId)
    getMenuItems()
  }, [orderId]);
```
You'll also need to
```JavaScript
import {useEffect} from 'react';
import { getOrder, getMenuItems } from './utilities';
```

3. Run and test this route with a hardcoded orderId in the url. Look in the network tab in the developer tools to see your Ajax request. (If you need to find some valid order IDs, you can always visit http://localhost:3008/orders)

## Orders
Alright, let's do one more. Let's read some orders.

1. Edit Orders.js. Add this code just inside the function.
```JavaScript
useEffect(() => {
    getOrders();
}, []);
```
Don't forget your imports like before. useEffect comes from react. getOrders comes from './utilities.js'.

2. Run and test by navigating to the [http://localhost:3000/orders](http://localhost:3000/orders) route and looking in the [devtools network](../../cheatsheet.md#to-view-network-traffic) tab. It should be getting back some orders.


A note on [exhaustive dependencies](/cheatsheet.md/exhaustive-dependencies).