const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.use('/api/todos', require('./routes/api/todos'));

module.exports = app;
