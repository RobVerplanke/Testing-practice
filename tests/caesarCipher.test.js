const caesarCipher = require('../functions/caesarCipher.js');

describe('caesarCipher', () => {
    it('should exist', () => {
        expect(caesarCipher).toBeDefined();
    })

    it('should return error when input is empty', () => {
        expect(caesarCipher('')).toBe('No input');
    })

    it('should wrap from z to a', () => {
        expect(caesarCipher('vwxy', 4)).toBe('zabc')
    })

    it('should return the same string if key is zero', () => {
        expect(caesarCipher('example', 0)).toBe('example')
    })

    it('should return encrypted string', () => {
        expect(caesarCipher('This is an example text.', 4)).toBe('Xlmw mw er ibeqtpi xibx.')
    })
}) 