const loginService = require('../services/login');

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const login = await loginService.logIn({ email, password });

  res.status(200).json(login);
};

module.exports = {
  logIn,
};