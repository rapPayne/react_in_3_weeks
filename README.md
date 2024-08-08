# React in 3 Weeks

Resources to support @RapPayne's O'Reilly course.
In this course we'll learn together to create a simple React application.

## Connect with Rap
- X/Twitter: [RapPayne](https://twitter.com/RapPayne)
- LinkedIn: [RapPayne](https://www.linkedin.com/in/rappayne/)
- Github: [RapPayne](https://github.com/rapPayne)
- Reddit: [RapPayne](https://www.reddit.com/u/rapPayne)

## Labs
We'll be creating a fairly full-featured application that will allow diners to order meals at a restaurant. Users can ...
- browse through the menu, 
- add food to their cart, 
- personalize the order (hold the mayo, extra ketchup, etc.)
- specify who each meal is for,
- and check out. 

Waiters can place an order for their customers. The diners could mark the order for delivery.

## The pages/views

### Menu view
Browse the food which is in categories. 
From here you can add to the cart.

### Cart view
See what's in the cart, remove items, add special notes like "extra soy sauce" or "no onions".
Assign each item to a person. 
See the order total. Leave a tip.
Enter Credit card info.
Place order button. Submits the order and forwards to the Order view.

### Order
The details of a single order. Read only.
Serves as the receipt.

### Orders
A logged in user can see their own orders. An admin user can see all orders.

### Register
Create an account on our site.
Also to modify user data.

### Login
Authenticate to the system. Writes to local storage for persisting a login token.

<!-- You can give it a test drive here.  -->

## The API data server
Obviously we need a place to get the data so we've provided a RESTful server that will be serving the data.
You can find it [here](https://github.com/rapPayne/daam-server).

This server is from a separate git project which we've submoduled with this:
```bash
git submodule add git@github.com:rapPayne/daam-server.git server
```
So as a separate project, you won't make changes here, you'll make changes in the https://github.com/rapPayne/daam-server project.

- If changes were made remotely, `git submodule update --remote`
- If you screw up and accidentally make changes locally, `cd server` and `git submodule update --remote --merge`. Much better to make them in the actual daam-server project.


Copyright &copy; 2024 Agile Gadgets LLC. 
All rights reserved. You may not republish or copy any part of this repository except for your own personal learning. If you want to use this as courseware for a React course, contact [@RapPayne](http://github.com/RapPayne) to obtain a license. 