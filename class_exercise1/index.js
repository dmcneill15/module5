const express = require("express"); //require the express package
const app = express();  //create an app using the express package. Can create multiple of these with different names if needed
const port = 3000;  //set the port to 3000

//bind or connect a 'get' endpoint to the object 'app' using the '/'URL root
//req: request
//res: response
app.get("/", (req, res) => {
  res.send("Hello World!"); //will send the message in brackets to the requestor
});

//will go to localhost:3000/test
app.get("/test", (req, res) => {
    res.send("Hello World!"); //will send the message in brackets to the requestor
  });

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
