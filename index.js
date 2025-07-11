const express = require('express');
const app = express();
const port = 80;

const version = process.env.APP_VERSION || "blue";

app.get('/', (req, res) => {
  res.send(`<h1>Hello from ${version} version!</h1>`);
});

app.listen(port, () => {
  console.log(`App ${version} listening on port ${port}`);
});
