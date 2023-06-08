# Using expressions
<!-- Time: 15 min -->
## Understanding the pre-written code
1. Edit Menu.js. Examine the code you entered in an earlier lab. It extracts one menuItem and displays it.
2. Find the `<img>` tag. Notice how we're using expressions in curly braces to provide the src attribute and the alt attribute.
3. Find the `<h2>` and the `<p>` tags with the item name and description.
4. Find the `<p>` tag with the price. Notice how we can run the `toCurrency` function in expressions. Functions calls are legal expressions!

## Displaying the order number
5. Edit Order.js. Remember that we're reading the orderId as a route parameter and console.log()ging it.
6. Find the `ORDER_ID_HERE` placeholder and make it show the orderId instead using an expression.
<!-- 6. Put `Order {orderId}` in an `<h2>`. -->
7. Run and test with multiple order ids to make sure you're reading and displaying them properly.

## Displaying the cart contents
In a future lab we'll be managing the cart with real data. But for now we'll simulate reading it with a hardcode.

8. Edit Cart.js. Paste this inside the function near the top:
```JavaScript
  const cart = [{
    id: 1,
    name: "Garden salad",
    description: "Meal-sized portion. garden greens, tomatoes, peppers, celery, carrots",
    category: "entrees",
    price: 6.54,
    imageUrl: "images/salad_1.jpg",
    available: true,
    itemId: 300
  }]
  const cartItem = cart[0];
```

9. Look in the JSX. Find a placeholder that says `CART_ITEM_NAME_HERE`. Make it display the actual item name here. (Hint: Put `cartItem.name` in curly braces.)
10. Run and test. Make sure you can see "Garden salad" on the rendered web page.
11. Now do the same for `CART_ITEM_CATEGORY_HERE`.
12. And do it one last time for `CART_ITEM_PRICE_HERE`

That's enough for now. But remember how those curly braces work, we'll be using them in every lab.