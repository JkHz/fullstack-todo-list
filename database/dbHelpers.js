const Todo = require('./index');

const dbHelpers = {
  getAll: async () => {
    try {
      let results = await Todo.find()
      return results;
    } catch(err) {
      return err;
    }
  },

  post: async (todo) => {
    try {
      let newTodo = await Todo.create(todo);
      return newTodo;
    } catch(err) {
      return err;
    }
  },

  update: async (id, bool) => {
    try {
      let updatedTodo = await Todo.findByIdAndUpdate(id, {$set: {completed: bool}}, {new: true});
      return updatedTodo;
    } catch(err) {
      return err;
    }
  },

  delete: async (id) => {
    try {
      let deletedTodo = await Todo.findByIdAndDelete(id)
      return deletedTodo;
    } catch(err) {
      return err;
    }
  }
}

module.exports = dbHelpers;