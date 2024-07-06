const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter; //gets the letter out of the query: /friends/filter?letter=R
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.startsWith(filterLetter)
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the gender or letter matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res.status(404).json({ error: "No friends matching criteria " });
  }
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  //content-type does not exisit in the response?

  //destructuring vs direct assignment
  //const { 'user-agent': userAgent} = req.headers; //destructuring assignment
  //const userAgent = req.headers['user-agent'];     //direct assignment.

  const userAgent = req.headers["user-agent"];
  const contentType = req.headers["content-type"];
  const acceptHeader = req.headers["accept"];

  const filteredHeaders = {
    "user-agent": userAgent,
    "content-type": contentType,
    accept: acceptHeader,
  };

  //res.json(req.headers)
  res.json(filteredHeaders);
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  console.log(req.params);
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  let foundFriend = friends.find((friend) => friend.id == friendId);

  // Modify this response with the matched friend, or a 404 if not found
  //res.json({ result: "Finding friend with ID " + friendId });

  if (foundFriend) {
    res.status(200);
    res.json(foundFriend);  //just displays the object
    //res.json({result: "Finding friend with ID" + friendId + ": " + {foundFriend}}); //does not display the foundFriend object - need to use stringify
    //res.json({result: `Finding friend with id:${friendId}: ${JSON.stringify(foundFriend)}`});
    
  } else {
    res.status(404);
    res.json({result:`Friend with id:${friendId} does not exist`});
  }
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
//always need app.use(express.json()); when POSTing
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  let friendId = parseInt(req.params.id); 
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  //search through the friend array to find the index of the friend matching the chosen id - note: id is different to index!
  let friendIndex = friends.findIndex(friend => friend.id == friendId)

  //confirm that the friend exists
  if(friendIndex !== -1){
    //replace all the data for that friend
    //maps to a new array - if the id matches, replace that friend, otherwise just use the friend as it is
    /*friends = friends.map(friend => 
        friend.id === friendId ? { ...friend, ...updatedFriend } : friend
      );*/
      friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };

      res.json({
        result: "Updated friend with ID " + friendId,
        data: updatedFriend,
      });
  }
  else{
    res.status(404);
    res.json({ error: `Friend with id: ${friendId} does not exist` });
  }

  // Modify this response with the updated friend, or a 404 if not found

});

module.exports = router;
