const express = require('express');

const rescue = require('express-rescue');

const {
  add,
  getAll,
  getById,
  deleteMe,
 } = require('../controllers/user');

 const { auth } = require('../middlewares');

const user = express.Router();

user.get('/',
  auth,
  rescue(getAll));

user.get('/:id',
  auth,
rescue(getById));

user.post('/', 
  rescue(add));

user.delete('/me',
  auth,
  rescue(deleteMe));

module.exports = user;