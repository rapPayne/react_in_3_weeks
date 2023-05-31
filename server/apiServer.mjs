import process from 'process';
import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';
import { loggingMiddleware } from './middlewares/logging-middleware.mjs';
import { authRouter } from './middlewares/authentication-middleware.mjs';
import { orderRouter } from './routers/order.router.mjs';

const app = jsonServer.create()

const port = 3008;

// We can choose to skip authorization to make development easier. Just add the --skipAuth flag when running.
const skipAuth = process.argv.includes('--skipAuth') || process.argv.includes('-s');
if (skipAuth) {
  app.skipAuth = skipAuth;
  console.warn('Skipping authorization. This is only for development purposes.');
}

const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults(); // noCors b/c cookies aren't written when CORS is set to '*'
//app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(jsonServer.rewriter({ "/api/*": "/$1" }));

app.use(jsonServer.bodyParser)
app.use(loggingMiddleware)
app.use(middlewares)
app.use(cookieParser());

authRouter(app);
orderRouter(app)
app.use(router)

app.listen(port, () => {
  console.log(`API Server is running on port ${port}.`)
  console.log('Please keep it running during all lab exercises.')
});