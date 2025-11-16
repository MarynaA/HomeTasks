async function runPromises(functionsArray) {
    console.log("Starting promises executing...");
    
    let promises = [];
    
    
    for (let i = 0; i < functionsArray.length; i++) {
        let promise = functionsArray[i]();
        promises.push(promise);
    }
    
    console.log("Promises started...");
    
    
    let results = await Promise.all(promises);
    
    console.log("All promises executed!");
    console.log("Results:", results);
    
    return results;
}


function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 executed");
            resolve("Result 1");
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 executed");
            resolve("Result 2");
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 executed");
            resolve("Result 3");
        }, 1500);
    });
}


let tasks = [task1, task2, task3];
runPromises(tasks);