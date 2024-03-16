const capitalize = require('../functions/capitalize.js');

describe('capitalize', () => {
  it('should exist', () => {
    expect(capitalize).toBeDefined();
  })

  it('should return a string', () => {
    const result = capitalize();
    expect(typeof result).toBe('string');
  })

  it('should capitalize first character', () => {
    const input = 'example';
    const result = capitalize(input);
    expect(result).toBe('Example');
  })

  it('should capitalize first character of every given string', () => {
  const input = 'flexible';
  const result = capitalize(input);
  expect(result).toBe('Flexible');
  })

  it('should handle multiple words', () => {
    const input = 'this is a sentence';
    const result = capitalize(input);
    expect(result).toBe('This is a sentence');
    })

});
