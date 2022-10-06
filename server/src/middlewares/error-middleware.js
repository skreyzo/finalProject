const ApiError = require('../exceptions/api-error');

module.exports = (err, req, res, next) => {
  //console.log(err);
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, erors: err.errors });
  }
  res.status(500).json({ message: `unexpected error ${err.message}` });
};
