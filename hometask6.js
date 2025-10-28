//поменять массив в обратном порядке 

//let array = [1,2,3,4,5,6]
//array.reverse()
//console.log(array)

//найти максимальное значение числа в массиве ([3,67,15...])

//let array = [3,67,15]
//const maxnumber = Math.max(...array)
//console.log(maxnumber)

// сортировка массива по возрастанию/убыванию

//let array = [8,1,9,2,7,3,4,5,6]
//array.sort(function(a,b){
    //return a-b;
//});

//array.sort(function(a,b){
   // return b-a;
//});
//console.log(array)



//записать в массив ряд фибоначчи начиная с N члена с длинной массива M
let N = 0
let M = 10
let a = 0
let b = 1
for (i = 0; i < N; i++){
    const fib_number = a + b;
    a = b;
    b = fib_number;
       
}

const fibonachiarray = []
for (let i = 0; i < M; i++) {
  fibonachiarray.push(a);
  const fib_number = a + b;
  a = b;
  b = fib_number;
}
console.log(fibonachiarray)

//удалить из массива все повторяющиеся элементы
let array = [1, 2, 3,6,1,5,3,4,9,5,5,6,7,8,8]
let newArray = array.filter((item,index)=>array.indexOf(item)=== index)
console.log(newArray)






