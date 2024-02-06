function add(a:number, b:number):number{
    return a+b;
}
console.log(add(10,20));

let addNumber5=(a:number, b:number):number=>a+b;
console.log(addNumber5(10,20));

//optional function
function addNumber1(a:number, b:number,c?:number):number{
    return a+b+(c??0);
}

//rest parameter
function addNumber3(...nums:number[]):number{
    let sum:number=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}
console.log(addNumber3(10,20,30,40));