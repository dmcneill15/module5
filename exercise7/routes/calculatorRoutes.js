const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

//new route for adding two numbers - replace original
router.get("/add", (req, res) =>{
    calculatorController.addNumbers(req,res);
})

router.get("/subtract", (req, res) =>{
    calculatorController.subtractNumbers(req, res);
})

router.get("/divide", (req, res) =>{
    calculatorController.divideNumbers(req, res);
})

router.get("/multiply", (req, res) =>{
    calculatorController.multiplyNumbers(req,res);
})

module.exports = router;