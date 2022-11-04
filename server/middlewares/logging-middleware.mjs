
export const loggingMiddleware = (req, res, next) => {
  res.set('X-Powered-By', 'Agile Gadgets');
  console.log('*'.repeat(80))
  next();
}