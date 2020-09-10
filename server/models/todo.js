const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  text: {
    type: String,
    unique: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

module.exports = ToDo = mongoose.model('todo', ToDoSchema);
