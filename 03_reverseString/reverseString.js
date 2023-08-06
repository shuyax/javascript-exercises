const reverseString = function(input) {
    let output = '';
    for (let i = 0; i < input.length; i++){
        output += input.slice(input.length - 1 - i, input.length - i);

    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
