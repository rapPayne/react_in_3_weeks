# API data server

A RESTful server to serve data for the restaurant app.

To start it up:
```bash
npm install
npm run load-db
npm start
```

## Database collections
See [database.json](database.json) for the final structure. Here's a general layout.
### menuItems
| column      | type   | notes                            |
| ----------- | ------ | -------------------------------- |
| id          | number | Primary key                      |
| name        | string |                                  |
| description | string |                                  |
| category    | string | free-form                        |
| price       | number |                                  |
| imageUrl    | string |                                  |
| available   | bool   | false=doesn't appear on the menu |

TODO: Category should eventually be a collection/enum

### users
| column     | type   | notes                            |
| ---------- | ------ | -------------------------------- |
| id         | number | Primary key                      |
| email      | string | Also the username                |
| password   | string | Should be hashed but isn't       |
| first      | string |                                  |
| last       | string |                                  |
| phone      | string |                                  |
| imageUrl   | string | optional                         |
| creditCard | object | {PAN, expiryMonth, expiryYear}   |
| adminUser  | bool   | true=Has administrator privilege |

### oldOrders (GET, POST)
| column     | type      | notes                                                                                |
| ---------- | --------- | ------------------------------------------------------------------------------------ |
| id         | number    |                                                                                      |
| userId     | number    |                                                                                      |
| orderTime  | Date      |                                                                                      |
| pickupTime | Date      |                                                                                      |
| location   | string    | table or "doordash","ubereats", etc.                                                 |
| tax        | number    |                                                                                      |
| tip        | number    |                                                                                      |
| creditCard | {}        | {PAN: string, expiryMonth, expiryYear, cvv: string}                                  |
| items      | Array[{}] | {cartItemId: number, itemId: number, price: number, notes: string,firstName: string} |
  

## Endpoints
### menuItems (GET)
### users (GET, PATCH)
- List of all users by admin users only
- Single user by that authenticated user only
### placeOrder (POST)
- POST: body is the entire cart
- Authenticated user only???

Built on [json-server](https://github.com/typicode/json-server)