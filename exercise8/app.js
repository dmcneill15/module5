//handle creating and setting up the Express app with all routes.
//index.js will then only need to import this app and start it on the right port, as all other setup is already handled in app.js.

const express= require('express');
const app = express();
//const port = 3000;

app.use('/', express.static('public'));

// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

//swagger setup
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// export the app
module.exports = app;
