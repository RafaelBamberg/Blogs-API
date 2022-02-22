const express = require('express');

const rescue = require('express-rescue');

const {
  add,
  getAll,
  getById,
  updateById,
  deleteById,
 } = require('../controllers/post');

const { auth } = require('../middlewares');

const post = express.Router();

post.get('/',
  auth,
  rescue(getAll));

post.get('/:id',
  auth,
  rescue(getById));

post.post('/',
  auth,
  rescue(add));

post.put('/:id',
  auth,
  rescue(updateById));

post.delete('/:id',
  auth,
  rescue(deleteById));

module.exports = post;