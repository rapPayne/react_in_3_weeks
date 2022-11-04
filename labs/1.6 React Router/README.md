# React Router
<!-- Time: 30min -->
1. First, install react-router-dom. from the command line run 
```bash
npm install react-router-dom
```
2. Next, put it in control of your app. Edit index.js and change this line
```JavaScript
.render(<App />);
```
to this
```JavaScript
.render(<BrowserRouter><App /></BrowserRouter>);
```
Don't forget that you'll need to `import { BrowserRouter } from 'react-router-dom';`


1. Add your routes. Edit App.js. Change your `<main>` section to look like this
```JavaScript
<main>
  <Routes>
    <Route path='/' element={<Menu />} />
    <Route path='/cart' element={<Cart />} />
  </Routes>
</main>
```
Again, remember to import `Route` and `Routes` from react-router-dom.

1. Run and test with http://localhost:3000 and http://localhost:3000/cart. You should be able to see each component by navigating to its route.
2. Now that you've mastered those, add routes for Orders, Register, and Login. Make sure they work before moving on.

## Route parameters
1. Add a route for `<Order>` with a parameter called `orderId`. Make it look like this
```JavaScript
<Route path="/orders/:orderId" element={<Order />} />
```
Now let's _read_ the parameter.

7. Edit Order.js. Add this to the top:
```JavaScript
import { useParams } from 'react-router-dom';
```
8. Add a new line after the `function` line
```JavaScript
export function Order() {
  const { orderId } = useParams(); // <-Add this line
  console.log("Order", orderId);
```
9. Run and test. If you console.log() the orderId, you should be able to browse to http://localhost:3000/orders/123 and see '123' logged to the console.

## Creating the nav bar Links
Reloading the app on every hyperlink click is clunky and slow. We should avoid using `<a href="foo>Go to Foo</a>`. Instead we should use `<Link>`.

10. Edit App.js. Find the page `<header>`. Make it look like this.
```JavaScript
<header id="pageHeader">
  <nav>
    <Link to="/">Dinner and a movie</Link>
    <Link to="/login">Log in</Link>
    <Link to="/register">Register</Link>
    <Link to="/cart">Check out</Link>
    <Link to="/orders">Past orders</Link>
  </nav>
</header>
```
Don't forget to import Link.

11. If you run and test, you should be able to click on any of these links and navigate successfully. Fix any problems you encounter.
12. Bonus! In the Login.js component, there's a hyperlink that sends the user to the '/register' route. Change that to a `<Link>`

Alright! One more task.

## Navigating in JavaScript
When we navigage to the Orders route, the user will eventually see a list of orders. (Right now it's just a single line). We want them to be able to click/tap on any order in that list to navigate to `/orders/<orderId>` and view the details for that order. We *could* make that a `<Link>` but it will look better as table rows. So we're going to use the `useNavigate` hook.

12. Make the top of Orders.js look like this.
```JavaScript
import { useNavigate } from 'react-router-dom';
export function Orders() {
  const navigate = useNavigate();
```
You're adding the "import" and the "const" lines.

13. We currently have only one row in the table. Find it and add a click event to it. When the user clicks on the `<tr>`, they should navigate. Something like this should do:
```JavaScript
<tr onClick={() => navigate(`/orders/12345`)}>
``` 
14. Run and test. When you click/tap the row, you should navigate to the order detail for that order.

## Bonus! Add a catch-all route
If the user navigates to a route we don't have defined, it will show nothing at all, which will be confusing to them. Let's fix that with a catch-all route.

15. Test it out first by navigating to http://localhost:3000/nonsense
16. You see nothing where a component should be, right?
17. Add this as the last line of your `<Route>`s
```JavaScript
    <Route path="*" element={<NotFound />} />
```
18. Of course it doesn't compile because `<NotFound>` doesn't exist yet.
19. Create `<NotFound>`. Make it look any way you want. Maybe tell the user "404 Not found" or something? Don't forget to import it in App.js.
20. Run and test. It's working when you can navigate to any non-existent route and see your new component.