const jwt = require('jsonwebtoken');

const {
  authorizationError,
} = require('../errors');

const jwtConfig = { algorithms: ['HS256'] };

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) { throw authorizationError('Token not found'); }

  try {
    const { id } = jwt.verify(authorization, process.env.JWT_SECRET, jwtConfig);

    req.userId = id;

    return next();
  } catch (err) { throw authorizationError('Expired or invalid token'); }
};