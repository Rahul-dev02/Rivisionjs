const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by aplle"
}
// for(const key  in myObj){  
//     console.log(key)
// }

for(const key in myObj){
    // console.log(`${key} shortcut is ${myObj[key]}`)

}

const programming=["py","rb","py","java"]

for (const key in programming){
 console.log(programming[key])
}

const coading=["js","java","ruby","cpp"]

coading.forEach( function (value){
    // console.log(value)
} )

coading.forEach( (item)=>{
    //  console.log(item)
} )

// function printMe(item){
//   console.log(item)
// }
// coading.forEach(printMe)



coading.forEach( (item,index,arr)=>{
//    console.log(item,index,arr)
} )


const myCoading=[
    {
        pgName:"javascript",
        pgFile:"js"
    },
    {
        pgName:"ruby",
        pgFile:"rb"
    },
    {
        pgName:"nodejs",
        pgFile:"ns"
    }
]

myCoading.forEach( (item)=>{
    // console.log(item.pgName)
} )