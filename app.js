const express = require('express');
const app = express();
var morgan = require('morgan');

app.use(express.json({ extended: false }));
app.use(morgan('dev'));

app.use('/api/todos', require('./routes/api/todos'));

module.exports = app;
