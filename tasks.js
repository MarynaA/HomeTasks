//const words = "Hellow world from JS"
//const reverseWorlds = words.split(' ').reverse().join(' ')
//console.log(words.split(' ').reverse())
//console.log(reverseWorlds)

const palindrom  ="A man a plan a canal Panama"
const checkPalindrom = palindrom.toLocaleLowerCase().split(' ').reverse().map(str => str.split('').reverse().join('')).join('')
console.log(palindrom.toLocaleLowerCase().split(' '))
console.log(palindrom.toLocaleLowerCase().split(' ').reverse())
console.log(palindrom.toLocaleLowerCase().split(' ').reverse().map(str =>str.split('').reverse().join('')))
console.log(checkPalindrom)
console.log(palindrom.toLocaleLowerCase().split(' ').join('') === checkPalindrom)


//создать функцию которая посчитает гласные в строке
//Programming is fun -> 5
const str = "Programming is funaaa"
let sum = 0;
for(let i = 0; i < str.length; i++){
    if(str[i]=== 'a' || str[i]=== 'e'|| str[i]=== 'i'|| str[i]=== 'o'|| str[i]=== 'u'|| str[i]=== 'y'){
        sum++
    }
}
console.log(sum)
const sum1 = 0;
const letters = 'aeiouy';
for (let i =0; i<str.length;j++){
    if(str[i] ===letters[j]){
        sum1++
        break
    }
}
console.log(sum1)
