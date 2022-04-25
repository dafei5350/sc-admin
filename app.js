const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})

const server = app.listen(5000, function () {
  const {address, port} = server.address();
  console.log('Http Server is running on http://%s:%s', address, port);
})

