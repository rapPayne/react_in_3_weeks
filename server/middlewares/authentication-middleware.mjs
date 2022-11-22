// need cookieParser middleware before we can do anything with cookies

import fs from 'fs';

// Initialized to empty, this is where we save who is currently
// logged on to the server.
// 
// When someone successfully authenticates, we associate their
// identity (user account info) with the auth token that's in
// the "auth" cookie.
//
// The identity is a user record taken from the database.
//
// Each session will be an object with:
// - token: toString
// - user: {username, creditCard, etc.}
const sessions = [];

// POST /login - if good username/password, write an auth token.
export const authenticationMiddleware = (req, res, next) => {
  if (req._parsedUrl.path === "/login" && req.method === "POST") {
    const { username, password } = req.body;
    console.log(`User:"${username}", Pass:"${password}"`);
    const db = readDatabase();
    const users = db.users;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      // Create a session token
      const cookieVal = makeCookie()
      // Write it as a cookie
      res.cookie('auth', cookieVal, { maxAge: 20 * 60 * 1000 /* 20 minutes */, httpOnly: true });
      // Save it here in global memory along with the user.
      sessions.push({ token: cookieVal, user: { ...user, token: cookieVal } })
      res.status(200).send({ ...user, password: "****", token: cookieVal });
    } else {
      res.status(401).send("Bad username or password");
    }
    return;
  } else {
    next();
  }
}

// If the user sent an 'auth' cookie, set req.user.
// This should be run on every request.
export const setIdentityMiddleware = (req, res, next) => {
  // check if client sent 'auth' cookie
  let cookie = req.cookies?.auth;
  if (cookie) {
    const user = sessions.find(s => s.token === cookie)
    console.log("found user:", user)
    req.user = user;
  }
  next();
}

// export const authorizationMiddleware = (req, res, next) => {
//   //TODO: Read auth token and user from a cookie.
//   //TODO: Put it in the req object
//   //TODO: Pass control on to next thing

//   next();
// }

//TODO: Should the hardcoded filename be read from a variable provided by json-server?
const dbFile = './database.json';
function readDatabase() {
  return JSON.parse(fs.readFileSync(dbFile));
}
function saveDatabase(db) {
  fs.writeFileSync(dbFile, JSON.stringify(db));
}


// DEBUGGING ONLY: Did we write a cookie?
export const debugCookieMiddleware = function (req, res, next) {
  // check if client sent 'auth' cookie
  let cookie = req.cookies?.auth;
  if (cookie === undefined) {
    console.log(`no auth cookie`);
  } else {
    console.log('auth cookie exists', cookie);
  }
  next();
};


function makeCookie() {
  return `daam-${Math.random().toString().substring(2)}`
}




// TODO: Create/use register route
// if (req._parsedUrl.path === "/register" && req.method === "POST") {
//   console.log('hit register')
//   const newUser = req.body;
//   const {email, password, name, phone, credit_card} = newUser;
//   if (!email || !password ) {
//     res.status(401).send(`Email and password are needed to register`);
//     return;
//   }
//   const db = readDatabase();
//   const {users} = db;

//   const user = users.find(u => u.email === email);
//   if (user) {
//     res.status(400).send(`${email} already exists. Login or register with a different email.`);
//     return;
//   }
//   db.users.push(newUser);
//   saveDatabase(db);
//   return;
// } else {
//   next();
// }
