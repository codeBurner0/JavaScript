// need a callback function by which it apply the condition on every element
// if any one element not fulfil the condition then it will return false
// Otherwise true

let arr=[1,2,3,4]
let res=arr.every((item)=>{
    return item>1
})
console.log(res) //false


let obj=[
    {name:"Ankit"},
    {name:"Anand"},
    {name:"Anand"},
    {sec:"Anand"},
]
let ans=obj.every((item)=>{
    return item.name!==undefined
})
console.log(ans)//false



let a=[
    [1,2,3],
    [4,5,6]
]
res=a.every((i)=>{
    return Array.isArray(i)
})
console.log(res)