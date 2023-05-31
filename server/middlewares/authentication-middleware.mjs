// need cookieParser middleware before we can do anything with cookies
import { readDatabase, saveDatabase } from '../repository.mjs';

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
// - token: string - a sort of random string that's used to identify the session
// - user: {username, creditCard, etc.}
const sessions = [];

export function authRouter(app) {
  // If the user sent an 'auth' cookie, set req.user.
  // This should be run on every request.
  app.use((req, res, next) => {
    // check if client sent 'auth' cookie
    let cookie = req.cookies?.auth;
    if (cookie) {
      // find the session in global memory
      const session = sessions.find(s => s.token === cookie)
      req.user = session?.user;
    }
    next();
  });

  // Middleware to skip auth for certain routes
  app.use((req, res, next) => {
    if (app.skipAuth)
      req.skipAuth = true;
    next();
  });

  // POST /login - if good username/password, write an auth token.
  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const db = readDatabase();
    const users = db.users;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      // Create a session token
      const cookieVal = makeCookie()
      console.log('made cookie', cookieVal);
      // Write it as a cookie
      res.cookie('auth', cookieVal, { maxAge: 120 * 60 * 1000 /* 120 minutes */, httpOnly: true });
      // Save it here in global memory along with the user.
      sessions.push({ token: cookieVal, user: { ...user } })
      res.status(200).send({ ...user, password: "****" });
    } else {
      res.status(401).send("Bad username or password");
    }
  });

  // POST /register 
  app.post("/register", (req, res) => {
    const newUser = req.body;
    const { username, password, email, first, last, phone, credit_card } = newUser;
    console.log('hit register', username, password)

    if (!username || !password) {
      res.status(401).send(`Username and password are needed to register`);
      return;
    }
    const db = readDatabase();
    const { users } = db;

    let user;
    user = users.find(u => u.username === username);
    if (user) {
      res.status(400).send(`${username} already exists. Login or register with a different username.`);
      return;
    }
    user = users.find(u => u.email === email);
    if (user) {
      res.status(400).send(`${email} already exists. Login or register with a different email.`);
      return;
    }

    user = { id: getNextUserId(users), ...newUser, adminUser: false, isServer: false };

    db.users.push(user);
    saveDatabase(db);
    res.status(200).send(user)

  });

}

function makeCookie() {
  return `daam-${Math.random().toString().substring(2)}`
}

export const getNextUserId = (users) =>
  users.reduce((prev, curr) => (prev > curr.id) ? prev : curr.id, 0) + 1;
