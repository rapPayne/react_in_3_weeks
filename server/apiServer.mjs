// server.js
import jsonServer from 'json-server';
import cookieParser from 'cookie-parser'
import { loggingMiddleware } from './middlewares/logging-middleware.mjs';
import { authenticationMiddleware } from './middlewares/authentication-middleware.mjs';
import { cookieMiddleware } from './middlewares/cookie-middleware.mjs';
import { placeOrderMiddleware } from './middlewares/order-middleware.mjs';

const port = 3008;

const app = jsonServer.create()
const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults()

app.use(jsonServer.rewriter({ "/api/*": "/$1" }));

app.use(jsonServer.bodyParser)
app.use(middlewares)
app.use(cookieParser());

app.use(cookieMiddleware)
app.use(loggingMiddleware)
app.use(authenticationMiddleware)
app.use(placeOrderMiddleware)
app.use(router)

app.listen(port, () => {
  console.log(`API Server is running on port ${port}.`)
  console.log('Please keep it running during all lab exercises.')
})