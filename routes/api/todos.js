const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const ToDo = require('../../models/todo');
const todo = require('../../models/todo');

// @route   POST api/todos
// @desc    Add ToDo
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

    try {
      // Checking if ToDo item exists
      let todo = await ToDo.findOne({ text });

      if (todo) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'ToDo item already exists' }] });
      }
      // Creating ToDo
      const newToDo = new ToDo({
        text
      });

      const toDo = await newToDo.save();

      res.json(toDo);
    } catch (err) {
      console.error(err);
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
      ? res.status(200).json(toDos)
      : res.status(200).send({ msg: 'There is no toDos yet.' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error.');
  }
});

// @route   DELETE api/todos
// @desc    Delete ToDo
// @access  Public

router.delete('/:id', async (req, res) => {
  try {
    const toDo = await ToDo.findById(req.params.id);

    if (!toDo) {
      return res.status(404).json({ msg: 'ToDo not found.' });
    }

    await toDo.remove();

    res.status(200).json({ msg: 'ToDo removed.' });
  } catch (err) {
    console.error(err);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'ToDo not found.' });
    }

    res.status(500).send('Server Error.');
  }
});

// @route   PUT api/todos/mark/:id
// @desc    Mark as done or undone
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const toDo = await ToDo.findById(req.params.id);

    // Check if marked as done
    if (!toDo.isDone) {
      toDo.isDone = true;
      await toDo.save();
    } else {
      toDo.isDone = false;
      await toDo.save();
    }

    return res.status(200).json(toDo.isDone);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error.');
  }
});

module.exports = router;
