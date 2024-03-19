const analyzeArray = require('../functions/analyzeArray.js')

describe('analyzeArray', () => {
    it('should exist', () => {
        expect(analyzeArray).toBeDefined();
    })

    it('should return a object', () => {
        const returnedValue = analyzeArray([2, 4, 6]);
        expect(typeof returnedValue).toBe('object');
    })

    it('should return error No input received if no input is given' , () => {
        expect(analyzeArray('')).toBe('No input received');
    })

    it('should return object with an average property', () => {
        const returnedValue = analyzeArray([2, 4, 6]);
        expect(returnedValue.average).toBe(4);
    })

    it('should return object with an min property', () => {
        const returnedValue = analyzeArray([2, 4, 6]);
        expect(returnedValue.min).toBe(2);
    })

    it('should return object with an max property', () => {
        const returnedValue = analyzeArray([2, 4, 6]);
        expect(returnedValue.max).toBe(6);
    })

    it('should return object with an length property', () => {
        const returnedValue = analyzeArray([2, 4, 6]);
        expect(returnedValue.length).toBe(3);
    })

})