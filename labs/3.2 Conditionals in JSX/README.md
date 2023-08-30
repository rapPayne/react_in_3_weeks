# Conditional displays
<!-- Time: 20 minutes -->

The user loads his cart with meals for the table. They then need to check out. If the user were already logged in, we could pre-populate their payment info. Let's make that happen.

## Allow the user to log in
When the user logs in, we will write a `user` to state. It will hold their personal information like name, and payment information. Let's start with the state variable.

1. The `setUser` function exists in App.js but they'll be setting the user object in Login.js, so in App.js, pass `setUser` down to `<Login>` like this:
```HTML
<Login setUser={setUser} />
```

2. In Login.js, read `setUser` as a prop, create your state variables and import login from utilities.js. Change this:
```JavaScript
export function Login() {
```
to this:
```JavaScript
import { login as loginToServer } from './utilities';
export function Login(props) {
  const setUser = props.setUser;
```

3. When the user clicks the Login button, you're already calling `login`, so alter that function to submit a *real* request to the server. Make the `login` function look like this:
```JavaScript
function login() {
  loginToServer(username, password)
    .then(user => setUser(user))
    .then(() => navigate('/cart'))
}
```

If the user enters a good username/password, their personal information is now stored in the user variable and they'll be forwarded to the `Cart` route.

4. Run and test with a good username/password and a bad one. Make sure one logs you in and the other does not.

## Only show the log in option if they're logged out
We can now authenticate a user to our site. If the user is logged in, there's no need to show them the 'Log in' option in the menu. So if they have a token, display `null`.

1. Edit App.js. Find the menu `<Link>` for "Log in". Put a conditional on it:
```JavaScript
{user.token ? null : <Link to="/login">Log in</Link>}
```
This says if there's a user token show nothing. Otherwise, show them the link.

2. Run and test. If you're not logged in, you should see the menu option. But if you are, it should be blank.

## Allowing the user to log out
Let's show a logged-in user a menu option to log themselves out.

1. Add another menu option to your main menu:
```JavaScript
{user.token && <Link to="#" onClick={() => setUser({})}>Log out</Link>}
```

This says if the user token exists, show them the logout link. Otherwise, show nothing.

2. Run and test. You should be able to click that link at any time to de-authenticate yourself.

## Detecting the user
One last task. If the user is not logged in, the Cart component should render a 'Log in' button.

1. In App.js, pass `user` down to `<Cart>` as a prop. (Hint: `user={user}`).

2. Edit Cart.js. Read the user prop. (Hint: `const user = props.user`).

3. Prepare to route to login by importing useNavigate from react-router-dom and calling it:
```JavaScript
const navigate = useNavigate();
```

4. Add a button anywhere you like on the page:
```HTML
<button onClick={() => navigate('/login')}>Log in</button>
```

At this point, clicking on the `<button>` will work just great. But we don't want to display this button for someone who's already logged in.

5. Here's a challenge for you. With fewer instructions, make this button appear only if `user.token` is [falsey](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). (Hint: Look at how we've done that earlier).


## Bonus!! Reading the other data.
Remember that a major goal for this lab was to use the user data, especially to pre-populate the data in the cart.

1. In Cart.js, in the state setters initial data, use the user data to pre-populate the form info. Here's an example for the credit card PAN (primary account number):
```JavaScript
const [pan, setPan] = useState(user?.creditCard?.PAN);
```

2.  Do the same for expiryMonth and expiryYear.

3.  Run and test. When you're logged in, you should have the credit card info pre-populated. And when not, you should see the log in button.