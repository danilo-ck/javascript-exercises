const fibonacci = function(member) {
    member = Number(member);
    let sequence = [1, 1]
    if(member === 0){
        return 0;
    }else if(member < 0){
        return "OOPS";
    }else{
        for(let i = 0; i < member-2; i++){
            sequence[i + 2] = sequence[i] + sequence[i+1];
        }
        return sequence[member - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
