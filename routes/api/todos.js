const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/todos
// @desc    Gets All Todos
// @access  Public
