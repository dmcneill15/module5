const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// Add this new route into userRoutes.js:
// get information about this request from the headers
// get info from the url header http://localhost:3000/users/headers
router.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
});

// Dynamic request param endpoint - get the user matching the specific ID ie. http://localhost:3000//users/3
// gets the parameters associated with the user id of 3
router.get("/:id", (req, res) => {
  console.log(req.params);

  let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
  let user = users.find((user) => user.id == userId);

  user
    ? res.status(200).json({ result: user })
    : res.status(400).json({ result: `User ${userID} not found` });
});

// a POST request with data sent in the body of the request, representing a new user
//adds a new user to our users list
router.post("/", (req, res) => {
  let newUser = req.body; // first update index.js
  console.log(newUser);
  // we can add some validation as well
  if (!newUser.name || !newUser.location) {
    res.status(500).json({ error: "User must contain a name and location" });
    return;
  } else if (!newUser.id) {
    // if no ID, generate one
    newUser.id = users.length + 1;
  }
  // if the new user is valid, add them to the list
  users.push(newUser);
  res.status(200).json(newUser); // return the new user
});

module.exports = router;
