

let a=[12,3,4,5,6,3,7678]

a.forEach((val,ind,arr)=>{
    console.log(`${val}: and its index is ${ind}`)
})

let b=['a','b','a','c','d','d']
count={}

b.forEach((e)=>{
    if(count[e]){
        count[e]++;
    }else{
        count[e]=1;
    }
})
console.log(count)

