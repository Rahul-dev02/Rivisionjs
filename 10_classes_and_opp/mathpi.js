const Descriptor= Object.getOwnPropertyDescriptor(Math ,'PI')
// console.log(Math.PI)
// console.log(Descriptor)


const chai={
    name:'RAHUL YADAV',
    work:'software',
    salary:100000,
    isavailable:true,

    order:function(){
        console.log('chai nhi bani')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name")) 

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function')
    console.log(`${key} : - ${value}`)
}