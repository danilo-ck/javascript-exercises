const sumAll = function(first, second) {
    
    if(first < 0 || second < 0){
        return "ERROR";
    }

    if(!Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }

    let start = Math.min(first, second);
    let end = Math.max(first, second);
    let sum = 0;

    for(let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
