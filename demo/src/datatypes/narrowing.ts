function print1(a:string | number){
if(typeof a ==="string"){
    return a.toLocaleLowerCase();
}
}


// 2.optional 
function optionalFunc(sinhvien?:{name:string ,age: number}){
    if(sinhvien){
        return sinhvien;
    }
}
// 3.in
interface User {
    username: string,
    password: string,
    email: string,
}

enum ROLE {STAFF, MANAGER}

interface Admin extends User {
    is_admin: boolean,
    role: ROLE.STAFF | ROLE.MANAGER
}
function login(user: User | Admin){
    if( "is_admin" in user){
        console.log("welcome to admin");
    }else{
        console.log("welcome back");
    }
}


//Selection sort
function SelectionSort(arr:number[]):number[]{
        for(let i=0;i<arr.length - 1;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
 return arr;
    }
}