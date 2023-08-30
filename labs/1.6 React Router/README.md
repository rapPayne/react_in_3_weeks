# React Router
<!-- Time: 30min -->

Let's add client-side routing to our web app. After this lab, the user will be able to navigate from component to component.

1. First, install react-router-dom. From the command prompt/terminal window run 
```bash
npm install react-router-dom
```
Don't forget to start your React app again.
```bash
npm run dev
```

2. Next, put it in control of your app. Edit `main.jsx` and change this line
```JavaScript
.render(<App />);
```
to this
```JavaScript
.render(<BrowserRouter><App /></BrowserRouter>);
```
Don't forget that you'll need to `import { BrowserRouter } from 'react-router-dom';`

3. Add your routes. Edit App.jsx. Change your `<main>` section to look like this
```JavaScript
<main>
  <Routes>
    <Route path='/' element={<Menu />} />
    <Route path='/cart' element={<Cart />} />
  </Routes>
</main>
```
Again, remember to import `Route` and `Routes` from react-router-dom.

4. Run and test with http://localhost:5173 and http://localhost:5173/cart. You should be able to see each component by navigating to its route.

5. Now that you've mastered those, add routes for Orders, Register, and Login. Make sure they work before moving on.

## Route parameters

1. Add a route for `<Order>` with a parameter called `orderId`. Make it look like this
```JavaScript
<Route path="/orders/:orderId" element={<Order />} />
```
Now let's _read_ the orderId parameter.

2. Edit `Order.jsx`. Add this to the top:
```JavaScript
import { useParams } from 'react-router-dom';
```

3. Add a new line after the `function` line
```JavaScript
export function Order() {
  const { orderId } = useParams(); // <-Add this line
  console.log("Order ID", orderId);
```

4. Run and test. If you `console.log()` the orderId, you should be able to browse to http://localhost:5173/orders/123 and see '123' logged to the console. Try it with several different order numbers.

## Creating the nav bar Links
Reloading the app on every hyperlink click is clunky and slow. We should avoid using `<a href="foo>Go to Foo</a>`. Instead we should use `<Link>`.

1. Edit `App.jsx`. Find the page `<header>`. Make it look like this.
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
Don't forget to import `Link`.

This navigation bar will appear at the top of every view.

2. If you run and test, you should be able to click on any of these links and navigate successfully. Fix any problems you encounter.

3. Bonus! In the Login.jsx component, there's a hyperlink that sends the user to the '/register' route. Change that to a `<Link>`

## Navigating in JavaScript
When the user navigates to the Orders route, they will eventually see a list of orders. (Right now it's just a single line). We want them to be able to click/tap on any order in that list to navigate to `/orders/<orderId>` and view the details for that order. We *could* make that a `<Link>` but it won't style as nicely as table rows. So we're going to use the `useNavigate` hook.

1. Make the top of Orders.jsx look like this.
```JavaScript
import { useNavigate } from 'react-router-dom';
export function Orders() {
  const navigate = useNavigate();
```
You're adding the "import" and the "const" lines.

2.  We currently have only one `<tr>` in the `<tbody>`. Add a click event such that when the user clicks on the `<tr>`, they should navigate. Something like this should do:
```JavaScript
<tr onClick={() => navigate(`/orders/12345`)}>
``` 

3.  Run and test. When you click/tap the row, you should navigate to the order detail for that order.

Alright! One more task.

## Navigating on a button click
Let's say when the user logs in, we should send them to the "/home" route.

1.  Edit Login.jsx. First, remember to import useNavigate from react-router-dom and call `useNavigate()` to get an instance of the navigate function. 

2.  Find the button's click event. Change it to this:
```JavaScript
function login() {
  navigate('/');
}
```

3. Give it a try. When you click the Login button, you should be pushed to the "/" route.

## Bonus! Add a catch-all route
If the user navigates to a route we don't have defined, it will show nothing at all, which will be confusing to them. Let's fix that with a catch-all route.

1. Test it out first by navigating to http://localhost:5173/nonsense
You see nothing where a component should be, right?

2. Add this as the last line of your `<Route>`s
```JavaScript
    <Route path="*" element={<NotFound />} />
```
Of course it doesn't compile because `<NotFound>` doesn't exist yet.

3.  Create `<NotFound>`. Make it look any way you want. Maybe tell the user "404 Not found" or something? Don't forget to import it in App.jsx.

4.  Run and test. It's working when you can navigate to any non-existent route and see your new component.