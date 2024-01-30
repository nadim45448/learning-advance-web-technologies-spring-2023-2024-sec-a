let numbers=[1,2,3,4,5];
let fruits=['apple','banana','orange'];
let mixedArray=[1,"two",{name:'Alice'},[7,8,9]];

let firstNumber=numbers[0];
let secondFruit=fruits[1];
let thirdElement=mixedArray[2];

console.log(firstNumber);
console.log(secondFruit);
console.log(thirdElement);

numbers.push(6);
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

fruits.pop();
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

fruits.unshift('pear');
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

numbers.shift();
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

numbers.forEach(function(number)
{
    console.log(number);
});

let doubleNUmbers=numbers.map(function(number){
    return number*2;
});

const numbers1=[1,2,3,4,5];
const evenNumbers=numbers1.filter(function(num){
    return num%2===0;
});
console.log(evenNumbers);