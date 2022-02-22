const postService = require('../services/post');

const add = async (req, res) => {
  const post = await postService.add(req.body, req.userId);

  res.status(201).json(post);
};

const getAll = async (_req, res) => {
    const posts = await postService.getAll();
  
    res.status(200).json(posts);
  };

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await postService.getById(id);

  res.status(200).json(post);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const post = await postService.updateById(req.body, id, req.userId);

  res.status(200).json(post);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  await postService.deleteById(id, req.userId);

  res.status(204).end();
};

module.exports = {
  add,
  getAll,
  getById,
  updateById,
  deleteById,
};