const Arraya=["Thản Trần","Thản trần 1"];
function web17317_rennerric <T>(arr:T[],callback:(item:T,index:number)=>T):T[]{
    const temp=[]
    for(let i=0;i<arr.length;i++){
    const newItem=callback(arr[i],i)
        temp.push(newItem)
    }
    return temp;
}
const result=web17317_rennerric(Arraya,(item,index)=>{
    return item +"-web17"+" "+index;
})
console.log(result);