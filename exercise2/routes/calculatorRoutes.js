const express = require("express");
const router = express.Router();

//new route for adding two numbers

//sending data
//http://localhost:3000/calculator/add?num1=4&num2=10
//queries: start with ?
//multiple parameters are separated with &
/*router.get("/add", (req,res)=> {
    res.send(req.query);        //sends back the parameters recieved from the query
    console.log(req.query);
});*/

router.get("/add", (req, res) =>{
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1+ number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    //res.send(sum);
    res.json({result:sum})                  //rather send back as json object instead of just string. why?
})

router.get("/subtract", (req, res) =>{
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1+- number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    //res.send(sum);
    res.json({result:sum})                  //rather send back as json object instead of just string. why?
})

router.get("/divide", (req, res) =>{
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1/ number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    //res.send(sum);
    res.json({result:sum})                  //rather send back as json object instead of just string. why?
})

router.get("/multiply", (req, res) =>{
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1* number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    //res.send(sum);
    res.json({result:sum})                  //rather send back as json object instead of just string. why?
})

module.exports = router;