const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());
// app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

// TODO:
//   1. Create instance of express
//   2. Use express.json() to parse request bodies
//   3. Serve static files in 'dist' directory
//   4. Create request handlers for all CRUD operations
//   5. Launch server on a port of your choosing


app.listen(port, () => console.log(`Listening on port ${port}`));