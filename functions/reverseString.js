function reverseString(value){

  // Check if value is of type string
  if (typeof value !== 'string') return 'Not a valid string';

  // Return value if it only contains one character
  if (value.length === 1) return value;
  
  let result = '';

  // String is longer than 2 characters: reverse the string
  for (let i = value.length - 1; i >= 0; i--){
    result += value[i];
  }

  return result;
}

module.exports = reverseString;
