// Calculate average
function getAverage(array){
    const average = array.reduce((total, current) => {
        return total += current; // Calculate sum
    }, 0) / array.length // Divide sum by number of items

    return average;
}

// Select lowest number in array
function getMinValue(array) {
    let lowestNumber = array[0]; // Choose first number as reference 

    array.forEach(currentNumber => {
        if (currentNumber < lowestNumber) lowestNumber = currentNumber; // Compare numbers with reference number
    });

    return lowestNumber;
}

// Select highest number in array
function getMaxValue(array) {
    let highestNumber = array[0];  // Choose first number as reference 

    array.forEach(currentNumber => {
        if (currentNumber > highestNumber) highestNumber = currentNumber; // Compare numbers with reference number
    });

    return highestNumber;
}

// Get length of array
function getLength(array) {
    return array.length;
}

function analyzeArray(array){
    if (!array) return 'No input received'; // Return empty object if no input is given
    
    return { // Create object with all array properties
        average: getAverage(array),
        min: getMinValue(array),
        max: getMaxValue(array),
        length: getLength(array)
    };
}

module.exports = analyzeArray;