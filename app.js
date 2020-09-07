const express = require('express');
const app = express();
var morgan = require('morgan');

app.use(express.json({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use('/api/todos', require('./routes/api/todos'));

module.exports = app;
