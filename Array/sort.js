let arr=[1,2,4,0,7,800,678,56,9,3]
let res=arr.sort()
console.log(res)
//sort convert number in string thats why it gives wrong result on numbers
let ans=arr.sort((a,b)=>{
    return a-b;
})
console.log(ans)