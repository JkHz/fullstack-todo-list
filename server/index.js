const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;
const dbHelpers = require('../database/dbHelpers');

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/getTodos/', (req, res) => {
  dbHelpers.getAll()
    .then(results => res.status(200).send(results))
    .catch(err => res.status(404).send(err));
});

app.post('/postTodo/', (req, res) => {
  dbHelpers.post(req.body)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(404).send(err));
});

app.patch('/updateTodo/:id', (req, res) => {
  dbHelpers.update(req.params.id, req.body.completed)
  .then(results => res.status(200).send(results))
  .catch(err => res.status(404).send(err));
});

app.delete('/deleteTodo/:id', (req, res) => {
  dbHelpers.delete(req.params.id)
  .then(results => res.status(200).send(results))
  .catch(err => res.status(404).send(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
