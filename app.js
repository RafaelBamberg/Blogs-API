const express = require('express');

const {
  userRouter,
  loginRouter,
  categoryRouter,
  postRouter,
} = require('./routes');

const { 
  sequelizeError,
  joiError,
  domainError,  
  serverError, 
} = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.use(sequelizeError);
app.use(joiError);

app.use(domainError);

app.use(serverError);

module.exports = app;