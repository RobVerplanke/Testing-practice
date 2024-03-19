function caesarCipher(value, key) {
    if (!value) return 'No input'; // Input is empty

    const lowerA = 'abcdefghijklmnopqrstuvwxyz';
    const upperA = lowerA.toUpperCase();
    
    const result = value.split('').map((char) => { // Check each char of the input string
        if (lowerA.includes(char)) {
        return lowerA[(lowerA.indexOf(char) + key) % 26]; // Char is lowercase, return corrsponding char
        } else if (upperA.includes(char)) {
        return upperA[(upperA.indexOf(char) + key) % 26]; // Char is uppercase, return corrsponding char
        } else {
        return char; // Char is not alphabetic, add it to result unchanged
        }
    });

    return result.join(''); // Return result as string
}

module.exports = caesarCipher;