//a route is a single express component created using the Router module
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => {
  res.send("Hello World! First Test");
});
router.get("/test2", (req, res) => {
  res.send("Second test");
});

module.exports = router;

//dont use app anymore
