function getUniqueElements(array, compareFunction) {
    let result = [];
    
    
    for (let i = array.length - 1; i >= 0; i--) {
        let current = array[i];
        let isUnique = true;
        
        
        for (let j = 0; j < result.length; j++) {
            if (compareFunction(current, result[j]) == true) {
                isUnique = false;
                break;
            }
        }
        
        
        if (isUnique == true) {
            result.push(current);
        }
    }
    
    
    let final = [];
    for (let i = result.length - 1; i >= 0; i--) {
        final.push(result[i]);
    }
    
    console.log("Unic elements:");
    console.log(final);
    return final;
}


function compareById(obj1, obj2) {
    if (obj1.id == obj2.id) {
        return true;
    } else {
        return false;
    }
}

// Тест
let users = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Micke" },
    { id: 1, name: "Hanna" },
    { id: 3, name: "Kate" },
    { id: 2, name: "John" }
];

getUniqueElements(users, compareById);


console.log("---");


function compareByName(obj1, obj2) {
    if (obj1.name == obj2.name) {
        return true;
    } else {
        return false;
    }
}

let people = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Mick" },
    { id: 3, name: "Mark" }
];

getUniqueElements(people, compareByName);
