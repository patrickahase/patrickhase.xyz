require('dotenv').config();
const express = require('express');
const path = require('path');
//const cors = require('cors'); // cors not installed yet

const app = express();

// JSON parser
//app.use(express.json());

// Cors
//app.use(cors());

// serve static files from ./public
app.use(express.static(path.join(__dirname, 'public')));

// serve placeholder index at root url
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/placeholder/index.html');
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server started on port ${port}`));