const { User } = require('../models');

const { userSchema } = require('../schemas');

const { validateWithJoi } = require('../utils/joi');

const { notFoundError } = require('../errors');

const add = async (_user) => {
  validateWithJoi(userSchema, _user);

  const user = await User.create(_user);

  return user.dataValues;
};

const getAll = async () => {
  const users = await User.findAll();

  return users.map((user) => user.dataValues);
};

const getById = async (id) => {
  const user = await User.findByPk(id, { 
    attributes: { exclude: ['password'] }, 
  });

  if (!user) { throw notFoundError('User does not exist'); }

  return user.dataValues;
};

const deleteMe = async (id) => User.destroy({ where: { id } });

module.exports = {
  add,
  getAll,
  getById,
  deleteMe,
};