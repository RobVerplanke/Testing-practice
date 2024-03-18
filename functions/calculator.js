class Calculator {
    constructor() {
    }

    // Check for valid input first
    validateInput(valueOne, valueTwo){
        if (typeof valueOne !== 'number' || typeof valueTwo !== 'number' ||
        valueOne === '' || valueTwo === '') {
        return false; // At least one of the arguments is not a number or empty
    }
        return true; // Both values are numbers
    }

    add(valueOne, valueTwo) {
        if (this.validateInput(valueOne, valueTwo)){
            return valueOne + valueTwo; // Input is valid, add values
        }
        return 'NaN'; // Input is not valid
    }

    substract(valueOne, valueTwo) {
        if (this.validateInput(valueOne, valueTwo)){ 
          return valueOne - valueTwo; // Input is valid, substract values
        }
        return 'NaN'; // Input is not valid
    }

    divide(valueOne, valueTwo) {
        if (this.validateInput(valueOne, valueTwo)){
            return valueOne / valueTwo; // Input is valid, divide values
        }
        return 'NaN'; // Input is not valid
    }

    multiply(valueOne, valueTwo) {
        if (this.validateInput(valueOne, valueTwo)){
            return valueOne * valueTwo; // Input is valid, multiply values
        }
        return 'NaN'; // Input is not valid
    }
}

const calculator = new Calculator;

module.exports = calculator;