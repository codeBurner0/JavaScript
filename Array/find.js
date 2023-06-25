//search inside array and return the element which fulfil the condition and else undefined

let a=[12,3,4,5,6,3,7678]
let res=a.find((e)=>{
    return e===76
})
console.log(res)




let obj=[
    {name:"Ankit",age:12},
    {name:"Anuj",age:18},
    {name:"Sahil",age:32},
]
let b=obj.find((e)=>{
    return e.name==="Ankit"
}).age
console.log(b)