// app.test.js
// import supertest and the express app
const request = require("supertest");   //store the supertes library in a 'function
const app = require("./app");           //allows us to make requests to app endpoints


//describe funciton groups multipleunit tests together = test suite
//Creating a test suit for calculator routes
//describe comes from Jest
describe("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  //test(param1, param2): param1: describe the test. param2: function to test, returns pass/fail
  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)   //request to the app
      .expect("Content-Type", /json/)                           //check the content and that a sucess is returned
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  test("GET /calculator/subtract => subtraction of numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)   //request to the app
      .expect("Content-Type", /json/)                           //check the content and that a sucess is returned
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  test("GET /calculator/divide => division of numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)   //request to the app
      .expect("Content-Type", /json/)                           //check the content and that a sucess is returned
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });

  test("GET /calculator/multiply => multiplication of numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)   //request to the app
      .expect("Content-Type", /json/)                           //check the content and that a sucess is returned
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });

});
