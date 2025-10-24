
//number+boolean

let a = 10;

let bool1 = true; 
let bool2 = false; 

let result1 = a + bool1; 
let result2 = a + bool2; 
let result3 = a*bool1;
let result4 = a*bool2;
let result5 = a/bool1;
let result6 = a/bool2;

console.log("сложение number+boolean " + result1);
console.log("сложение number+boolean " + result2);
console.log("умножение number+boolean " + result3);
console.log("умножение number+boolean " + result4);
console.log("деление number+boolean " + result5);
console.log("деление number+boolean " + result6);

//string+boolean

let b = "HEllo";


let result7 = b + bool1; 
let result8 = b + bool2; 
let result9 = b*bool1;
let result10 = b*bool2
let result11 = b/bool1;
let result12 = b/bool2

console.log("сложение string+boolean " + result7);
console.log("сложение string+boolean " + result8);
console.log("умножение string+boolean " + result9);
console.log("умножение string+boolean " + result10);
console.log("деление string+boolean " + result11);
console.log("деление string+boolean " + result12);

//string/number
let result13 = b + a; 
let result14 = b*a; 
let result15 = b/a;
let result16 = a/b;

console.log("сложение string+number " + result13);
console.log("умножение string*number " + result14);
console.log("деление string/boolean " + result15);
console.log("деление boolean/string " + result16);


//Выполнить явное преобразование(number, string, boolean)

//строка в number
let k = "33"
//console.log(k)
//let q = Number(k)
console.log(Number(k))

//строка в булеан

let string_k = 'true'
let string_l= 'false'
let string_text = 'text'
console.log("строка в булеан " + (string_k === 'true'))
console.log("строка в булеан " + (string_l === 'true'))
console.log("строка в булеан " + (string_text === 'true'))


//number в строку

let m = 99
console.log(typeof m)
console.log(typeof String(m))

//number в булеан

let f = 1
console.log("number в булеан " + Boolean(f))
let g = 0
console.log("number в булеан " + Boolean(g))

//булеан в строку
let payment = true
console.log(payment)
console.log("булеан в строку " + String(payment))

//булеан в number

let v = true
let c = false
console.log("булеан в number " + Number(v))
console.log("булеан в number " + Number(c))

