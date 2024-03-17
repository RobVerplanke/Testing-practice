const calculator = require('../functions/calculator.js');

describe('calculator', () => {
    
    it('should exist', () => {
        expect(calculator).toBeDefined();
    })

    it('should have a method called add', () => {
        expect(calculator.add()).toBeDefined();
    })
    it('should have a method called substract', () => {
        expect(calculator.substract()).toBeDefined();
    }) 
    
    it('should have a method called divide', () => {
        expect(calculator.divide()).toBeDefined();
    }) 
    
    it('should have a method called multiply', () => {
        expect(calculator.multiply()).toBeDefined();
    })

    // it('', () => {
    //     expect(calculator).toBe();
    // })
})