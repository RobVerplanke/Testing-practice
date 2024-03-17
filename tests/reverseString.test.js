const reverseString = require('../functions/reverseString.js');

describe('reverseString', () => {

    it('schould exist', () => {
        expect(reverseString).toBeDefined();
    })

    it('should return a string', () => {
      const result = reverseString();
      expect(typeof result).toBe('string');
    })

    it('should return empty string if input is empty', () => {
      const input = '';
      expect(reverseString(input)).toBe('');
    })

    it('should return Not a valid string message if input is not a string', () => {
      const input = 123;
      expect(reverseString(input)).toBe('Not a valid string');
    })

    it('should not change input if it exists of a single character', () => {
      const input = 'A';
      expect(reverseString(input)).toBe('A');
    })

    it('should return the string reversed', () => {
      const input = 'Example';
      expect(reverseString(input)).toBe('elpmaxE');
    })

    it('should reverse string with multiple words', () => {
      const input = 'This is a sentence.';
      expect(reverseString(input)).toBe('.ecnetnes a si sihT');
    })
})