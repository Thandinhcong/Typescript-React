var str = 'Thantran';
var str2 = 10;
var thantran = "thantran";
thantran = null;
//bolean
// array
var arr = ["a", "b", "c"];
// nested array (mảng lồng mảng);
var arr1 = [["a", "b", "c"]];
var arr2 = ['a', "c"];
// tuple
var arr3 = ["a", 2, true];
var arr4 = [["a", 2, true], ["b", 3, false]];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULLIED"] = 2] = "FULLIED";
})(STATUS || (STATUS = {}));
var trangThai = STATUS.FULLIED;
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(CODE || (CODE = {}));
;
console.log(trangThai);
