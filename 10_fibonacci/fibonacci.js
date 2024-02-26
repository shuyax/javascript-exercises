const fibonacci = function(index) {
    if(index >= 0){
        let array = [1,1]
    for (let j = 1; j < index; j++){
        array[j + 1] = array[j] + array[j-1]
    }
    console.log(index, array)
    return array[index-1]
    } else {
        return 'OOPS'
    }
    


};

// Do not edit below this line
module.exports = fibonacci;
