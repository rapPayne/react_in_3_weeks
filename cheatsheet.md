# React cheatsheet

## JavaScript things

### Arrow functions
Concise syntax for anonymous functions.
Useful for event handlers and callback functions.
Example: const sum = (a, b) => a + b;
### Destructuring
Extract specific values from arrays and objects.
Makes code cleaner and easier to read.
Example: const [firstName, lastName] = ["John", "Doe"];
### Spread operator
Expands an iterable into individual elements.
Useful for copying arrays and objects.
Example: const numbers = [...[1, 2, 3], 4, 5];
### Array mapping
Applies a function to each element in an array.
Useful for transforming data and creating new arrays.
Example: const squares = numbers.map(num => num * num);
### Hoisting
JavaScript's way of handling variable declaration.
Variables declared with var are hoisted, but not those with let and const.
Important to understand for proper variable usage.
### Promises
Represent asynchronous operations and their outcomes.
Used for handling data fetching and other asynchronous tasks.
Example: fetch("data.json") .then(response => response.json()) .then(data => console.log(data));

### Object literals
Shorthand syntax for object properties.
Enables computed property names and method definitions.
Example: const person = { name, age: 30, greet() { console.log("Hello!"); } };

### Exception handling
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

## HTML things

## CSS things

### Grid layout

### Flex layout

## Browser things

### To see something in the browser console
1. Hit F12 in Windows or cmd-opt-i in MacOS
2. Click the hamburger menu and choose *other tools-developer tools* then choose "Console" in the tab.
3. Right-click the page, choose *Inspect* and then choose "Console" in the tab.

### To view network traffic
Just like above, get the dev tools open but then hit the "Network" tab. You'll be able to see every request and response. Clicking on a request will show you its details.

## React things

### useEffect

### Exhaustive dependencies
When useEffect has a dependency which is not listed in the dependency array, you may have some headaches in debugging issues as a result. So the best practice is to list every single one and to enable the exhaustive dependency linting rule. That is our official position.

However we are very aware of the controversy around this topic and the confusion caused by it so, for the purposes of a beginner class that already has a HUGE concept count, we've chosen to not make a big deal of emphasizing exhaustive dependencies. Our goal is for people to learn best practices but not at the expense of them quitting because "React is too hard to learn." Please don't judge us too harshly; we all have to make tradeoffs.  

https://stackoverflow.com/questions/56972415/useeffect-dependency-array-and-eslint-exhaustive-deps-rule

### Redux
https://leanpub.com/redux-book


## Eslint

### Ignoring rules across the entire project
1. Find the .eslintrc.cjs (or .mjs or .js) file
1. Add the rule you want to ignore to the "rules:" section.

For example:
```javascript
  rules: {
    'react/prop-types': 'off',  // To turn off the checking of prop-types
```

