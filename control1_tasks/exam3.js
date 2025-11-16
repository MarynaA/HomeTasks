function groupByAge(people) {
    let result = {};
    
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let age = person.age;
        let name = person.name;
        
        
        if (result[age] == undefined) {
            result[age] = []; 
        }
        
        
        result[age].push(name);
    }
    
    console.log(result);
    return result;
}

let people = [
    { name: "Kate", age: 45 },
    { name: "Jack", age: 18 },
    { name: "John", age: 39 },
    { name: "Piter", age: 21},
    { name: "Mark", age: 62 }
];

groupByAge(people);