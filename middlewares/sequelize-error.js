const Sequelize = require('sequelize');

const { conflictError } = require('../errors');

module.exports = (err, _req, _res, next) => {
  // intercept sequelize errors
  if (err instanceof Sequelize.UniqueConstraintError) { 
    throw conflictError('User already registered'); 
  }

  next(err);
};