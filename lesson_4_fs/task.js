const fs = require('fs-extra');

fs.mkdir('.folder1')


fs.outputFileSync('.folder1' + '/' + 'file1.txt', 'HomeTask!')

fs.mkdirSync('.folder2');
fs.moveSync('.folder1' + '/' + 'file1.txt', '.folder2' + '/' + 'file1.txt')
fs.mkdirSync('.folder3');
fs.moveSync('.folder2' + '/' + 'file1.txt', '.folder3' + '/' + 'file3.txt')
fs.removeSync('.folder3' + '/' + 'file1.txt')
fs.removeSync('.folder1')
fs.removeSync('.folder2')
fs.removeSync('.folder3')
console.log("Success")

