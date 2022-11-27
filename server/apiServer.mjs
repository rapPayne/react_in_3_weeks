import jsonServer from 'json-server';
import cookieParser from 'cookie-parser'
import { loggingMiddleware } from './middlewares/logging-middleware.mjs';
import { authRouter } from './middlewares/authentication-middleware.mjs';
import { getOrdersMiddleware, placeOrderMiddleware } from './middlewares/order-middleware.mjs';

const port = 3008;

const app = jsonServer.create()
const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults()

app.use(jsonServer.rewriter({ "/api/*": "/$1" }));

app.use(jsonServer.bodyParser)
app.use(middlewares)
app.use(cookieParser());

authRouter(app);
app.use(placeOrderMiddleware)
app.use(getOrdersMiddleware)
app.use(router)

app.listen(port, () => {
  console.log(`API Server is running on port ${port}.`)
  console.log('Please keep it running during all lab exercises.')
})