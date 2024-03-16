function capitalize(value) {
    if (!value) return '';
    if (typeof value !== 'string' || value[0] === ' ') return 'Not a valid string';

    const firstChar = value[0]; // Get first character
    
    if (!(/[a-zA-Z]/.test(firstChar))) return 'No first letter'; // Check if first character is a letter

    const capital = firstChar.toUpperCase(); // Capitalize first character
    const result = capital.concat(value.slice(1)); // Remove first character of string and add it after the capital

    return result;
  }
  
  module.exports = capitalize;
  