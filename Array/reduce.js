let arr=[1,2,3,4]
let res=arr.reduce((acc,e)=>{
    return acc+e;
},10)
//arr.reduce(function,default value_of_acc)
console.log(res)