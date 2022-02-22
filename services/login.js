const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { loginSchema } = require('../schemas');

const { validateWithJoi } = require('../utils/joi');

const { invalidFieldsError } = require('../errors');

const logIn = async (_user) => {
  validateWithJoi(loginSchema, _user);

  const { email } = _user;

  const user = await User.findOne({ where: { email } });

  if (!user) { throw invalidFieldsError('Invalid fields'); }

  const { id } = user.dataValues;

  const jwtConfig = { expiresIn: 300 };

  const token = jwt.sign({ id }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  logIn,
};