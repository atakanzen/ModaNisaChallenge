const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const ToDo = require('../../models/todo');

// @route   POST api/todos
// @desc    Adds ToDo
// @access  Public
router.post(
  '/',
  [check('text', 'ToDo text is required.').not().isEmpty()],
  async (req, res) => {
    // Returning BAD REQUEST if text is null
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text } = req.body;

    // Create ToDo Model
    try {
      let todo = await ToDo.findOne({ text });

      if (todo) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'ToDo item already exists' }] });
      }

      const newToDo = new ToDo({
        text
      });

      const toDo = await newToDo.save();

      res.json(toDo);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error.');
    }
  }
);

// @route   GET api/todos
// @desc    Gets All Todos
// @access  Public

router.get('/', async (req, res) => {
  try {
    const toDos = await ToDo.find();
    toDos.length > 0
      ? res.json(toDos)
      : res.send({ msg: 'There is no toDos yet.' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error.');
  }
});

module.exports = router;
