class Calculator {
  constructor() {
    this.id = this.#generateRandomId();
  }

  #generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  }
  
  #log = (value) => {
    // private method
    console.log(`[Calculator :${this.id}]:${value}`)
  };

  add(num1, num2) {
    const value = num1 + num2;
    //this.#log(value); // public method calling private method
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    //this.#log(value); // public method calling private method
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    //this.#log(value); // public method calling private method
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    //this.#log(value); // public method calling private method
    return value;
  }
}

module.exports= Calculator 
