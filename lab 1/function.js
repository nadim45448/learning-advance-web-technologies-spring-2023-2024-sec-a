function operateOnNumbers(a,b,opeartion){
    return opeartion(a,b);
}

function add (x,y){
    return x+y;
}

function multifly (x,y){
    return x*y;
}
let resultAddition=operateOnNumbers(5,3,add);
let resultMultiplication=operateOnNumbers(5,3,multifly);

console.log(resultAddition);
console.log(resultMultiplication);
