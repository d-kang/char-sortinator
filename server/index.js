const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = [];

app.get('/api/sort', (req, res) => {
  console.log('req', req.body, req.params, req.query);
  res.send(data);
});

app.post('/api/sort', (req, res) => {
  console.log('req', req.body, req.params, req.query);
  const { payload } = req.body;
  const sortinated = payload.split('').sort().join('');
  const pushed = [payload, sortinated];
  data.push(pushed);
  res.send(pushed);
});

app.use(express.static(path.join(__dirname, '../src')));

app.listen(3001, () => console.log('app is listening on port http://localhost:3000'));
