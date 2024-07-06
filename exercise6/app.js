//handle creating and setting up the Express app with all routes.
//index.js will then only need to import this app and start it on the right port, as all other setup is already handled in app.js.

const express = require("express");
const app = express();
const port = 3000;

// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);


// export the app
module.exports = app;
