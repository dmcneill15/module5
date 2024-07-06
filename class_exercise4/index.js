const userRoutes = require('./routes/userRoutes');

const express = require('express');
const app = express();
const port= 3000;

// ADD TO index.js ABOVE ALL app.use CALLS
// parse requests of content-type - application/json
// used for POSTing
app.use(express.json());

app.use('/', express.static('public'));

// map the user routes to our app
app.use('/users', userRoutes);

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})