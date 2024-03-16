const capitalize = require('../functions/capitalize.js');

describe('capitalize', () => {
  it('should exist', () => {
    expect(capitalize).toBeDefined();
  })

  it('should return a string', () => {
    const result = capitalize();
    expect(typeof result).toBe('string');
  })
  
  it('should return Not a valid string message if input is not a string', () => {
    const input = 123;
    expect(capitalize(input)).toBe('Not a valid string');
  })
  
  it('should return empty string if input is empty', () => {
    const input = '';
    expect(capitalize(input)).toBe('');
  })

  it('should return empty string if input begins with a special character', () => {
    const input = '@#$%';
    expect(capitalize(input)).toBe('No first letter');
  })
  
  it('should return No first letter message if first character is not a letter', () => {
    const input = '123' ;
    expect(capitalize(input)).toBe('No first letter');
  })

  it('should capitalize first character of given string', () => {
    const input = 'example';
    const result = capitalize(input);
    expect(result).toBe('Example');
  })

  it('should capitalize first character of any given string', () => {
    const input = 'flexible';
    const result = capitalize(input);
    expect(result).toBe('Flexible');
  })

  it('should not change input if it exists of a single capital letter', () => {
    const input = 'A';
    expect(capitalize(input)).toBe('A');
  })

  it('should return capitalised string that is already capitalized', () => {
    const input = 'Capitalized';
    const result = capitalize(input);
    expect(result).toBe('Capitalized');
  })

  it('should handle multiple words', () => {
    const input = 'this is a sentence.';
    const result = capitalize(input);
    expect(result).toBe('This is a sentence.');
    })
});

