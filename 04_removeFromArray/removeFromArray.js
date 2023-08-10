const removeFromArray = function() {
    //let array = arguments[0].slice();
    //console.log(arguments[0]);
    for (let j = 1; j < arguments.length; j++) {
        for (let i = 0; i < arguments[0].length; i++) {
            if (arguments[0][i] === arguments[j]) {
                console.log(i);
                console.log(arguments[0][i]);
                arguments[0].splice(i,1);
                console.log(arguments[0]); 
            
            } 
            //array.push(arguments[0][i]); 
        }    
    }

    //console.log("test");
    //console.log(array);
    //console.log("test2");
    return arguments[0];

};

// Do not edit below this line
module.exports = removeFromArray;
