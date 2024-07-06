const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
     let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                 
  };

  const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1/ number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                  
  };

  const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);     //arguments from GET are strings. need to parseInt to convert to numbers
    let number2 = parseInt(req.query.num2);
    let sum = number1* number2;
    console.log(sum);
    res.status(200);                        //this is nothing for users of the calculator. rather for developers to know operation was a success
    res.json({result:sum})                  
  };

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers
};
