const express = require('express');

const rescue = require('express-rescue');

const { logIn } = require('../controllers/login');

const login = express.Router();

login.post('/',
  rescue(logIn));

module.exports = login;