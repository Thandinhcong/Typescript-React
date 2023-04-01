//function return
function demoFunc() {
    return;
}
////never
function demoFunc1() {
    var error = new Error("có lỗi xảy ra");
    throw error;
}
// function paramameter
var showInfo = function (fistName, midName, lastName) {
    return "Họ tên : " + fistName + " " + midName + " " + lastName;
};
console.log(showInfo("Đinh", "Công", "Thản"));
//hoisting
function sum(a, b) {
    return a + b;
}
// 3.optional?
//4.function declaration
//5.callback
function web17317_ok(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var numberArr = [1, 2, 3];
var newArr = numberArr.map(function (item) {
    return item * 2;
});
// rest params
var showClas = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("T\u00EAn sinh vi\u00EAn : ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", ")));
};
showClas("Thantran");
