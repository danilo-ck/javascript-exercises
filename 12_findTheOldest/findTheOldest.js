const findTheOldest = function(people) {
    let ages = people.map(person => {
        if(person.yearOfDeath != null){
            return (person.yearOfDeath - person.yearOfBirth);
        }else{
            let currentYear = new Date().getFullYear();
            return (currentYear - person.yearOfBirth);
        }
    });

    let sortedAges = ages.slice().sort((a, b) => b - a);
    
    return people[ages.indexOf(sortedAges[0])];
};

// Do not edit below this line
module.exports = findTheOldest;
