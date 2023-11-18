# Week 3 homework
<!-- Time: XX minutes -->


Congratulations, you've made it through! If the previous labs weren't enough for you, here is a final lab for you to put some final touches on your project.


In cart.jsx call placeorder and see it in the dababase.  Add auth to the app.

## Change the favicon
Your current favicon is the Vite logo. That's fine, but let's use the Dinner-and-a-movie logo as our favicon.
1. Notice that there's a favicon.ico in the starters folder.
1. Copy that file into the 'src/public' folder.
1. Edit 'index.html'. Change the `<link>` tag to look like this:
```html
<link rel="icon" type="image/png" href="/favicon.ico" />
```
1. Run and test. See your new favicon?
[Favicons appear in the browser tab](images/Favicon_browser.png)

## Add some styling
1. Make the login component look like this:
[Login component with styling added. Vision impaired students can skip this step.](images/Login_styled.png)
1. Make the checkout component look like this:
1. RAP: screenshot here

## Add toast notification
1. Install foo.js
1. Make it bring up toast notices when the user adds somethign to the cart.
1. When else, Rap?

## Write the register capability
1. Write the register component.
1. Rap, tell them what fields are needed.
1. Rap, tell them what the API POST should be.
1. 

## Need some further challenges?
1. Decompose the cartItem
1. Make the site responsive
1. A11y?




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

  margin-top: 50px;
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

  & nav {
    display: flex;
    background-color: var(--dark2);

    & a {
      color: var(--light1);
      text-decoration: none;
      padding: 10px;
      margin: 10px;
      text-transform: uppercase;
    }
  }
}
```

2.  When it refreshes, take a look at your top nav menu in the browser. 

3. Bonus! Comb through your site for any styles that you think can be improved and fix them.