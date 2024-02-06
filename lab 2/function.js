function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
var addNumber5 = function (a, b) { return a + b; };
console.log(addNumber5(10, 20));
//optional function
function addNumber1(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
//rest parameter
function addNumber3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
console.log(addNumber3(10, 20, 30, 40));
