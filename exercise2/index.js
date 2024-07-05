const calculatorRoutes = require('./routes/calculatorRoutes');

//create the app
const express= require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

//map the route to the app
//can now call localhost:3000/calculator/add
app.use('/calculator', calculatorRoutes);


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})

//sending data
//http://localhost:3000/calculator/add?num1=4&num2=10
//queries: start with ?
//multiple parameters are separated with &