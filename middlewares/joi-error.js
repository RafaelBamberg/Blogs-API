const Joi = require('joi');

const { invalidFieldsError } = require('../errors');

module.exports = (err, _req, _res, next) => {
  // intercept joi errors
  if (Joi.isError(err)) {
    throw invalidFieldsError(err.message);
  }

  return next(err);
};