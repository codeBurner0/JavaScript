//search inside array and return the element which fulfil the condition and else undefined

let a=[12,3,4,5,6,3,7678]
let res=a.find((e)=>{
    return e===76
})
console.log(res)