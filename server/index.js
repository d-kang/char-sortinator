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

app.post('/api/sort', (req, res) => {
  const { payload } = req.body;

  const sortinated = payload.split('').sort().join('');
  console.log('sortinated', sortinated);
  console.log('data', data);
  data.push([payload, sortinated])
  console.log('data', data);
  res.send(data);
});

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3001, () => console.log('app is listening on port http://localhost:3000'));
