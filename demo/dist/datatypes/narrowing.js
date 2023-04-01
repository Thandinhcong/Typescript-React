function print1(a) {
    if (typeof a === "string") {
        return a.toLocaleLowerCase();
    }
}
// 2.optional 
function optionalFunc(sinhvien) {
    if (sinhvien) {
        return sinhvien;
    }
}
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("is_admin" in user) {
        console.log("welcome to admin");
    }
    else {
        console.log("welcome back");
    }
}
//Selection sort
function SelectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        return arr;
    }
}
