//bubble sort
// sắp xếp theo số thứ tự
var Array1 = [2, 3, 9, 1, 8, 11, 4];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(Array1));
//sắp xếp theo bảng chữ cái
var array2 = ['Than_tran', 'Anh_tran', "cau_tran"];
function bubbleSort2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].localeCompare(arr[j + 1]) > 0) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort2(array2));
//insertionsort
var array3 = [12, 4, 8, 2, 5, 1];
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var result_1 = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > result_1) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = result_1;
    }
    return arr;
}
console.log(insertionSort(array3));
