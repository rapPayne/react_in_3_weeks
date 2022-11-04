// need cookieParser middleware before we can do anything with cookies

// set a cookie
export const cookieMiddleware = function (req, res, next) {
  // check if client sent cookie
  let cookie = req.cookies?.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  }
  next();
};