import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// allow server execution
import { exec } from "child_process";

//const cors = require('cors'); // cors not installed yet

const app = express();

// JSON parser
//app.use(express.json());

// Cors
//app.use(cors());

// serve static files from ./public
app.use(express.static(path.join(__dirname, 'dist')));

// serve placeholder index at root url
app.get('/', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

// listen for webhook on repo main branch update
app.post('/webhook/update', express.json({type: 'application/json'}), (req, res) => {
  // confirm webhook accepted
  res.status(202).send('Accepted');

  // check what kind of event was triggered
  const githubEvent = req.headers['x-github-event'];

  if (githubEvent === 'push'){
    // if something pushed to main run sh script
    console.log("push");
    exec("./bashscripts/pull-from-repo.sh");
  } else {
    // this logs any unhandled event
    console.log(`Unhandled event: ${githubEvent}`);
  }
});

const port = process.env.PORT || 33064;
app.listen(port, () => console.log(`Server started on port ${port}`));