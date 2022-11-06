import Chance from 'chance';
import fs from 'fs';

// Config values
const dbFileName = "./database.json";
const startingUserId = 1077;
const howManyUsers = 100;
const howManyMenuItems = 20;
const startingOrderId = 20123;
const howManyOrders = 200;

// Utility functions
String.prototype.toTitleCase = function () { return this.charAt(0).toLocaleUpperCase() + this.substring(1) };
const loadFromJSON = (filename) => JSON.parse(fs.readFileSync(filename));

// Setup
const chance = Chance.Chance();
const foodImageFiles = fs.readdirSync('./public/images');
const initialMenuItems = loadFromJSON('./initial_data/menuItems.json');
const initialUsers = loadFromJSON('./initial_data/users.json');
const db = {};

// Create some users
db.users = [];
db.users.push(...initialUsers);
for (let i = startingUserId; i <= startingUserId + howManyUsers; i++) {
  db.users.push(makeRandomUser(i))
}

// Create menu items
db.menuItems = []
db.menuItems.push(...initialMenuItems);
for (let i = db.menuItems.length + 1; i <= howManyMenuItems; i++) {
  db.menuItems.push(makeMenuItem(i));
}

db.orders = [];
for (let i = startingOrderId; i <= startingOrderId + howManyOrders; i++) {
  db.orders.push(makeOldOrder(i));
}

// save database file
fs.writeFileSync(dbFileName, JSON.stringify(db, null, 2))
//////////////////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////////////////

function makeOldOrder(id) {
  // get a random user, 
  const user = db.users[Math.floor(Math.random() * db.users.length)];
  // pick a random number between 1 and 6 for the number of items on the order, 
  const numberOfMenuItemsOrdered = Math.floor(Math.random() * 6) + 1;
  const items = [];
  for (let i = 1; i <= numberOfMenuItemsOrdered; i++) {
    const menuItem = db.menuItems[Math.floor(Math.random() * db.menuItems.length)];
    const item = {
      id: i,
      itemId: menuItem.id,
      price: menuItem.price,
      notes: Math.random() > .67 ? chance.sentence() : undefined, // Only occasionally have a note
      firstName: chance.first(),
    };
    items.push(item);
  }
  const subTotal = items.reduce((prevTotal, currItem) => prevTotal + +currItem.price, 0);
  const orderTime = ((new Date()) - Math.floor(Math.random() * 6 * 30 * 24 * 60 * 60 * 1000)); // Random time in the last 6 months
  const oldOrder = {
    id,
    userId: user.id,
    orderTime: new Date(orderTime),
    pickupTime: new Date(orderTime + Math.floor(Math.random() * 15 * 60 * 1000)), // Randomly 15 minutes after order time
    location: `Table ${Math.floor(Math.random() * 50)}`,  // Random table number
    tax: +(subTotal * 0.0825).toFixed(2), // 8.25% tax
    tip: +(subTotal * 0.20).toFixed(2),  // 20% tip
    creditCard: { ...user.creditCard, cvv: Math.floor(Math.random() * 900) + 100 },  // Random number between 100&999
    items,
  }
  return oldOrder;
}

function makeMenuItem(id) {
  const categories = ["entrees", "appetizers", "desserts", "beverages"];
  const menuItem = {
    id,
    name: `${chance.word().toTitleCase()} ${chance.word().toTitleCase()}`,
    description: chance.paragraph({ sentences: Math.floor(Math.random() * 3) }),
    category: categories[Math.floor(Math.random() * categories.length)],
    price: +(Math.random() * 12 + 3).toFixed(2),
    imageUrl: `images/${foodImageFiles[Math.floor(Math.random() * foodImageFiles.length)]}`,
    available: true,
  }
  return menuItem;
}

function makeRandomUser(id = 0) {
  const gender = chance.gender().toLowerCase();
  const first = chance.first({ gender });
  const last = chance.last();
  const biggestImageNumber = 110;
  const randomImageNumber = Math.floor(Math.random() * biggestImageNumber);
  const ccType = chance.cc_type();
  const expiryMonth = Math.floor(Math.random() * 12) + 1;
  const expiryYear = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1;
  const card = { PAN: chance.cc({ type: ccType }), expiryMonth, expiryYear };
  const person = {
    id,
    username: `${first.charAt(0).toLowerCase()
      }.${last.toLowerCase()}`,
    password: chance.word(),
    first,
    last,
    phone: chance.phone(),
    email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
    imageUrl: `https://minimaltoolkit.com/images/randomdata/${gender}/${randomImageNumber}.jpg`,
    creditCard: card,
    adminUser: false,
  }
  return person;
}