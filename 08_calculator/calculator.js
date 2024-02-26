const add = function(a, b) {
  let num = a + b;
  return num;
};

const subtract = function(a, b) {
  let num = a - b;
  return num;
	
};

const sum = function(array) {
  const total = array.reduce((total, current_item) => total + current_item, 0)
  return total
};

const multiply = function(array) {
  const num = array.reduce((total,current) => total * current, 1)
  return num
  
};

const power = function(a,b) {
  const num = a**b
  return num
};

const factorial = function(a) {
  let factor = 1
  for(let j = 1; j <= a; j++) {
    factor = factor * j;
  }
	return factor
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
