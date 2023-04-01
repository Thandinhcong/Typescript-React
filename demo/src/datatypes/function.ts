//function return
function demoFunc():void{
    return
}
////never

function demoFunc1():never{
    const error=new Error("có lỗi xảy ra");
    throw error
}
// function paramameter

let showInfo=(fistName:string,midName?:string,lastName?:string)=>{ 
    return "Họ tên : "+fistName + " " +midName+" "+lastName;
}
console.log(showInfo("Đinh","Công","Thản"));

//hoisting
function sum(a:number,b?:number){
    return a+b;
}
// 3.optional?


//4.function declaration

//5.callback

function web17317_ok(arr:any,callback?:(item:any)=>any){
const temp=[];
for(let i=0;i< arr.length;i++  ){
    const newItem=callback(arr[i]);
    temp.push(newItem)
}
return temp;
}
let numberArr=[1,2,3];
const newArr=numberArr.map((item)=>{
    return item *2
});


// rest params

const showClas=function(name:string,...classes:string[]){
    console.log(`Tên sinh viên : ${name} học lớp ${classes.join(", ")}`);
    
}
showClas("Thantran",)