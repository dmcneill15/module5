const Calculator = require('../libraries/Calculator');
const Logger = require('../libraries/Logger');

let myCalc = new Calculator();
let newLog = new Logger();

const addNumbers = (req, res) => {
  let myCalc1 = new Calculator();
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  let log = newLog.logMsg(myCalc1.id, sum);
  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.subtract(number1,number2);
    let log = newLog.logMsg(myCalc.id, sum);
    res.status(200);                            //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                 
  };

  const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.divide(number1,number2);
    let log = newLog.logMsg(myCalc.id, sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                  
  };

  const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.multiply(number1,number2);
    let log = newLog.logMsg(myCalc.id, sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                  
  };

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers
};
