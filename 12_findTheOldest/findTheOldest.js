const findTheOldest = function(people) {
    const oldestAge = people.reduce((oldestperson,person) => {
        if (person.yearOfDeath == undefined){person.yearOfDeath = new Date().getFullYear()}
        return (person.yearOfDeath - person.yearOfBirth) > (oldestperson.age) 
        ? {name: person.name, age: person.yearOfDeath - person.yearOfBirth} : oldestperson
}, {name: '', age: 0})

return oldestAge
};

// Do not edit below this line
module.exports = findTheOldest;
