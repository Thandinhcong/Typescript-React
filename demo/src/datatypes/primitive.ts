let str:string='Thantran';
let str2:string | number=10;

let thantran="thantran";
thantran=null;

//bolean

// array
const arr :Array<string>=["a","b","c"];
// nested array (mảng lồng mảng);
const arr1:string[][]=[["a","b","c"]];
const arr2:string[]=['a',"c"];

// tuple


let arr3:[string,number,boolean]=["a",2,true];

let arr4:Array<[string,number,boolean]>=[["a",2,true],["b",3,false]];

//enum

enum STATUS{PENDING,REJECTED,FULLIED}

const trangThai=STATUS.FULLIED;

enum CODE{SUCCESS=200,CLIENT_ERROR=400,SERVER_ERROR=500};

console.log(trangThai);



