const repeatString = function(string, num) {
    
    let concatenation = ""
    
    if(num < 0){
        return 'ERROR';
    }

    for(let i = 0; i < num; i++){
        concatenation += string;
    }
    return concatenation;
};

// Do not edit below this line
module.exports = repeatString;
