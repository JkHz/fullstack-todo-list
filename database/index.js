const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoList', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const todoSchema = mongoose.Schema({
  item: String,
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;