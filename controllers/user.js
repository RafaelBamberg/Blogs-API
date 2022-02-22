const userService = require('../services/user');

const add = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.add({ displayName, email, password, image });

  res.status(201).json(user);
};

const getAll = async (req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  res.status(200).json(user);
};

const deleteMe = async (req, res) => {
  await userService.deleteMe(req.userId);

  res.status(204).end();
};

module.exports = {
  add,
  getAll,
  getById,
  deleteMe,
};