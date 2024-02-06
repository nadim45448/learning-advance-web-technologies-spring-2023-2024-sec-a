var p = { id: 1, name: "JOhn" };
console.log(p);
// type union
var y;
y = 10;
console.log(y);
//literal type
var z;
z = "Red";
console.log(z);
// any type
var data;
data = "something";
console.log(data);
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color);
// tuple type
var employee;
employee = [1, "Steve"];
console.log(employee);
