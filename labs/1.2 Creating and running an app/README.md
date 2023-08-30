# Creating and running an app
<!-- Time: 15min -->
<!-- Goals
* Create the bare-bones app
* Replace boilerplate with reading data from API server. -->

1. Open a terminal window and cd to anywhere except in the `server` folder. Make it someplace you'll remember, like the desktop or something.

2. Create a new React app using vite.
```bash
npm create vite
```
- Project name: restaurant
- Framework: React
- Variant: JavaScript + SWC

3. cd to your new folder and `npm install`. Then `npm run dev` command to serve your new application. You'll know it's working when you can see the out-of-the-box default React app running at http://localhost:5173

4. Is it running? Cool! Kill it with `control-c`.

Let's get it reading some data.

## Reading from our API data server

1. Open your restaurant project in an IDE like VSCode.

2. Edit `vite.config.js`. Make it look like this:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3008',
        secure: false,
      },
    },
  },
})
```

3. Look in the starters folder for "utilities.js". Copy this into the src folder.

4. Restart your project with `npm run dev`. You shouldn't see any difference yet.

5. Edit src/main.jsx and make its entire contents look like this.
```JavaScript
import ReactDOM from 'react-dom/client';
import { App } from './App';
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
```
Ignore the console error about an export. We'll fix that soon.

6. Create a new file in `src` called `Menu.jsx` and put this in it
```JavaScript
import { useEffect, useState } from 'react';
import { getMenuItems } from './utilities';
export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  console.log({ menuItems });
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

7. Edit src/App.jsx and replace its entire contents with this
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

8. Run and test. You should see one menu item on the page and many menu items in the console.

If so, congratulations! You've got your new React app reading from the API data server.