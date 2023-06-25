//create new array

let a=[1,2,34,5,6,7]
let res=a.filter((e)=>{
    return e%2==0
})
console.log(res) // [ 2, 34, 6 ]



let obj=[
    {name:"Ankit",age:12},
    {name:"Anuj",age:18},
    {name:"Sahil",age:32},
]
let b=obj.filter((e)=>{
    return e.age>=18
})
console.log(b)


let dup=[1,2,1,2,3,3,4,5,6,7,3]
let rdup=dup.filter((val,ind,arr)=>{
    return arr.indexOf(val)===ind;
})
console.log(rdup)