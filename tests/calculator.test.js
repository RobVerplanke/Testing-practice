const calculator = require('../functions/calculator.js');

describe('calculator', () => {
    
    it('should exist', () => {
        expect(calculator).toBeDefined();
    })

    it('should have the methods add, substract, divide and multiply', () => {
        expect(calculator.add()).toBeDefined();
        expect(calculator.substract()).toBeDefined();
        expect(calculator.divide()).toBeDefined();
        expect(calculator.multiply()).toBeDefined();
    })

    it('should run validateInput for each other method', () => {
        const input = 'test';
        expect(calculator.add(input)).toBe('NaN');
        expect(calculator.substract(input)).toBe('NaN');
        expect(calculator.divide(input)).toBe('NaN');
        expect(calculator.multiply(input)).toBe('NaN');
    })

    it('should return NaN when arguments are not numbers', () => {
        const inputOne = 'One';
        const inputTwo = 'Two';
        expect(calculator.add(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.substract(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.divide(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.multiply(inputOne, inputTwo)).toBe('NaN');
    })

    it('should return NaN when one of the arguments is not a number', () => {
        const inputOne = 1;
        const inputTwo = 'Two';
        expect(calculator.add(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.substract(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.divide(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.multiply(inputOne, inputTwo)).toBe('NaN');
    })

    it('should return NaN when one of the arguments is empty', () => {
        const inputOne = '';
        const inputTwo = 'Two';
        expect(calculator.add(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.substract(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.divide(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.multiply(inputOne, inputTwo)).toBe('NaN');
    })

    it('should return NaN when input is empty', () => {
        const inputOne = '';
        const inputTwo = '';
        expect(calculator.add(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.substract(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.divide(inputOne, inputTwo)).toBe('NaN');
        expect(calculator.multiply(inputOne, inputTwo)).toBe('NaN');
    })

    it('should add two numbers', () => {
        const inputOne = 1;
        const inputTwo = 2;
        expect(calculator.add(inputOne, inputTwo)).toBe(3);
    })

    it('should substract two numbers', () => {
        const inputOne = 3;
        const inputTwo = 2;
        expect(calculator.substract(inputOne, inputTwo)).toBe(1);
    })

    it('should divide two numbers', () => {
        const inputOne = 8;
        const inputTwo = 2;
        expect(calculator.divide(inputOne, inputTwo)).toBe(4);
    })

    it('should multiply two numbers', () => {
        const inputOne = 2;
        const inputTwo = 3;
        expect(calculator.multiply(inputOne, inputTwo)).toBe(6);
    })
})