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
app.use(express.static(path.join(__dirname, 'placeholder')));

// serve placeholder index at root url
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/placeholder/index.html');
});

// listen for webhook on repo main branch update
app.post('/webhook/update', express.json({type: 'application/json'}), (req, res) => {
  // confirm webhook accepted
  res.status(202).send('Accepted');

  // check what kind of event was triggered
  const githubEvent = req.headers['x-github-event'];

  if (githubEvent === 'push'){
    console.log("push")
  } else {
    console.log(`Unhandled event: ${githubEvent}`);
  }
});

const port = process.env.PORT || 33063;
app.listen(port, () => console.log(`Server started on port ${port}`));