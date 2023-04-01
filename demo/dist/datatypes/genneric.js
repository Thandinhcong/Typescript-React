var Arraya = ["Thản Trần", "Thản trần 1"];
function web17317_rennerric(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
var result = web17317_rennerric(Arraya, function (item, index) {
    return item + "-web17" + " " + index;
});
console.log(result);
