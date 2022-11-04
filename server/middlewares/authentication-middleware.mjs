import fs from 'fs';

export const authenticationMiddleware = (req, res, next) => {
  if (req._parsedUrl.path === "/login" && req.method === "POST") {
    const { username, password } = req.body;
    console.log(`User:"${username}", Pass:"${password}"`);
    const db = readDatabase();
    const users = db.users;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      //TODO: Create a session token
      //TODO: Write it as a cookie
      //TODO: Save it here in global memory along with the user.
      res.status(200).send({ ...user, password: "****", token: "at03kn" });
    } else {
      res.status(401).send("Bad username or password");
    }
    return;
  } else {
    next();
  }

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
}

export const authorizationMiddleware = (req, res, next) => {
  //TODO: Read auth token and user from a cookie.
  //TODO: Put it in the req object
  //TODO: Pass control on to next thing

  next();
}

//TODO: Should the hardcoded filename be read from a variable provided by json-server?
const dbFile = './database.json';
function readDatabase() {
  return JSON.parse(fs.readFileSync(dbFile));
}
function saveDatabase(db) {
  fs.writeFileSync(dbFile, JSON.stringify(db));
}