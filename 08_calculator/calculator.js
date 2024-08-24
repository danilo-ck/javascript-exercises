const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, actual) => total + actual, 0);
};

const multiply = function(array) {
  return array.reduce((total, actual) => total * actual);
};

const power = function(num, power) {
  let result = 1;
  for(let i = 0; i < power; i++){
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  if(num === 0){
    return result;
  }else{
    for(let i = num; i > 0; i--){
      result *= i;
    }
    return result;
  }
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
