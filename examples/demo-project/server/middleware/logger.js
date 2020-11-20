module.exports = app => {
  app.get('/**.html', (req, res, next) => {
    // just to color output for: req.originalUrl
    console.log(`Request to:`, `\x1b[33m   ${req.originalUrl}   \x1b[0m`); // log all requests to html
    next();
  });
};
