# Creating and running an app
<!-- Time: 15min -->
<!-- Goals
* Create the bare-bones app
* Replace boilerplate with reading data from API server. -->

1. Open a terminal window and run the `npx` command to create a React app called `restaurant`. 
2. cd to your new folder and run the npm command to serve your new application. You'll know it's working when you can see the out-of-the-box default React app running at http://localhost:3000
3. Is it running? Cool! Kill it with `control-c`.

Let's get it reading some data.

## Reading from our API data server

4. Open your restaurant project in an IDE like VSCode.
5. Edit `package.json`. Add a "proxy" line anywhere at the top level.
```json
{
  "name": "restaurant",
  "proxy": "http://localhost:3008",  <-- Add this line
  "version": "0.1.0",
  "private": true,
```
6. Look in the starters folder for "utilities.js". Copy this into the src folder.
7. Restart your project with `npm start`
8. Edit src/index.js and make its entire contents look like this.
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
```
Ignore the error message about an export. We'll fix that soon.

9. Create a new file called Menu.js and put this in it
```JavaScript
import { useEffect, useState } from 'react';
import { getMenuItems, toCurrency } from './utilities';
export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  console.log({menuItems});
  const menuItem = menuItems?.[0] || {};
  return (
    <>
      <h1>Menu</h1>
      {menuItem.name}
    </>
  )
}
```
There's a lot of magic in that code with the useState and useEffect. Don't worry about those things right now because we'll cover them in detail later.

10. Edit src/App.js and replace its entire contents with this
```JavaScript
import { Menu } from './Menu';
export function App() {
  return (
    <>
      <header>
        <nav>
        </nav>
      </header>
      <main>
        <Menu />
      </main>
      <footer></footer>
    </>
  );
}
```

11. Run and test. You should see one menu item on the page and many menu items in the console.

If so, congratulations! You've got your new React app reading from the API data server.