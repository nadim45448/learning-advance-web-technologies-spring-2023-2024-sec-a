// type allias
type person={id:number, name:string};
let p:person={id:1, name:"JOhn"};
console.log(p);

// type union
let y:number | string;
y=10;
console.log(y);

//literal type
let z:"Red" | "Green" | "Blue";
z="Red";
console.log(z);

// any type
let data: any;
data="something";
console.log(data);

//enum type
enum Color{Red,Green, Blue};
let color: Color=Color.Red;
console.log(color);

// tuple type
let employee:[number, string];
employee=[1,"Steve"];
console.log(employee);