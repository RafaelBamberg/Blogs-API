const express = require('express');

const rescue = require('express-rescue');

const {
  add,
  getAll,
 } = require('../controllers/category');

const { auth } = require('../middlewares');

const category = express.Router();

category.get('/',
  auth,
  rescue(getAll));

category.post('/',
  auth,
  rescue(add));

module.exports = category;