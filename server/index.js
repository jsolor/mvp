const path = require('path');
const express = require('express');
// const axios = require('axios');
const { getLogs, newLog } = require('../db/controllers/queries');

const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/log/', (req, res) => {
  newLog(req.body)
    .then(() => {
      res.status(201);
      res.end();
    })
    .catch(() => {
      res.status(500);
      res.end();
    });
});

app.get('/log/entries', (req, res) => {
  getLogs()
    .then((data) => {
      res.status(200);
      res.send(data);
      res.end();
    })
    .catch(() => {
      res.status(500);
      res.end();
    });
});

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
