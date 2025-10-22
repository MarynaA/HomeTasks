const fs = require('fs-extra');
fs.mkdirSync('lesson_4');

fs.outputFileSync('C:/Users/m.arynich/Projects/hometasks/lesson_4/file1', 'Hello? home task!');

fs.mkdirSync('lesson_4.2');
fs.moveSync('C:/Users/m.arynich/Projects/hometasks/lesson_4/file1', 'C:/Users/m.arynich/Projects/hometasks/lesson_4.2/file1')
fs.mkdirSync('lesson_4.3');
fs.moveSync('C:/Users/m.arynich/Projects/hometasks/lesson_4.2/file1', 'C:/Users/m.arynich/Projects/hometasks/lesson_4.3/file1')
fs.removeSync('C:/Users/m.arynich/Projects/hometasks/lesson_4.3/file1')
fs.removeSync('C:/Users/m.arynich/Projects/hometasks/lesson_4')
fs.removeSync('C:/Users/m.arynich/Projects/hometasks/lesson_4.2')
fs.removeSync('C:/Users/m.arynich/Projects/hometasks/lesson_4.3')
console.log("Success")

