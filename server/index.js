const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello wor;d'));


app.listen(3000, () => console.log('app is listening on port http://localhost:3000'));
