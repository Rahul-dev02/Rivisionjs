const mysym= Symbol ("mykey1")
const jsUser={
    name: "Rahul",
    age:18,
    "full name" :"rahul yadav",
    email:"rahul@gamil",
    [mysym]:"kay1",
    family_name:['ramdhari','lalji','raju','dipak']

}


// Object.freeze(jsUser)
// jsUser.age=25
// console.log(jsUser)  

jsUser.greeting=function(){
    console.log("hello i am rahul yadav");
}

jsUser.greetingTwo=function(){
    console.log(`hello i am rahul yadav my age is ${this.age}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
