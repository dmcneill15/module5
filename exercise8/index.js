const app = require("./app"); //is this the same as import app from './app' ? - if using this need to use type:module in package.json. Require is common JS, import is JS Es6
const port = 3000;

//start the app to listen on the right port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
