const express = require("express");
const app = express();
const port = 3000;

const app1 = express();
const port1 = 3001;

const app2 = express();
const port2 = 3002;

app.get("/", (req, res) => {
  res.send("Hello World! This is original");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

app1.get("/", (req, res) => {
  res.send("Hello World! This is 1");
});

app1.listen(port1, () => {
  console.log(`Example app listening
  at http://localhost:${port1}`);
});

app2.get("/", (req, res) => {
  res.send("Hello World! This is 2");
});

app2.listen(port2, () => {
  console.log(`Example app listening
  at http://localhost:${port2}`);
});
