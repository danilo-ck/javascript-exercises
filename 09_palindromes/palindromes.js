const palindromes = function (string) {

    let cleaned = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversed = cleaned.split("").reverse().join("");

    if(cleaned === reversed){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
