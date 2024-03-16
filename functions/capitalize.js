function capitalize(value) {
    if (!value) return '';

    const capital = value[0].toUpperCase(); // Get first character and capitalize it
    const result = capital.concat(value.slice(1)); // Remove first character of string and add it after the capital

    return result;
  }
  
  module.exports = capitalize;
  