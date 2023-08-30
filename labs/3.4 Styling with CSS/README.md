# Styling with stylesheets
<!-- Time: 10 minutes -->

<!-- TODO: RAP, make the finalized version look great and then move it here.
TODO: Use css to make the .cartItem look good.
Main menu
cartItem
Responsive design -->

In the last lab we focused on making individual components look good. In this one, we will try to make the entire site look good.

## Setting base fonts and colors
1. Edit App.js. Add this to the top:
```JavaScript
import './site.css';
```

2. Now create the site.css file. Use any colors and fonts you like.
```CSS
:root {
  --dark1: #641634;
  --dark2: #341D3A;
  --dark3: #29776F;
  --light1: #EBE896;
  --light2: #CCB280;

  color: var(--dark1);
  background-color: var(--light1);

  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
```

2. Run and test. See the changes?

## Styling across the site
Our buttons could use some love.

1. Make sure you're looking at the Menu. Notice the buttons.

2. Add this to site.css
```CSS
button {
  padding: 13px;
  border-radius: 5px;
  font-size: 1.1em;
  color: var(--light1);
  background-color: var(--dark3);
  border: none;
}
```

3. Save the file and when the browser refreshes, look at your buttons now. Cool, right?

## Formatting the navigation menu
Look at the menu at the top of every view. Looks like it could use a little help, doesn't it? Let's format it.

1. Edit site.css. Add these lines:
```CSS
#pageHeader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
#pageHeader nav {
  display: flex;
  background-color: var(--dark2);
}
#pageHeader nav a {
  color: var(--light1);
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  text-transform: uppercase;
}
```

2.  When it refreshes, take a look at your top nav menu in the browser. 

3. Bonus! Comb through your site for any styles that you think can be improved and fix them.