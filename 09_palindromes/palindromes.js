const palindromes = function (string) {
    string = string.split('')
    for (i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase()
        if (string[i] == ' '){
            string[i] = ''
        } else if (string[i] > 'z' || string[i] < 'a'){
            string[i] = ''
        }
    }
    console.log(string)
    const temp1 = string.join('')
    
    console.log(temp1)
    
    const temp = string.reverse().join('')
    console.log(temp)
    
    return temp === temp1

};


// Do not edit below this line
module.exports = palindromes;
