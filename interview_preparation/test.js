// const person={
//     name:"Rahul",
//     age:25
// }

// for(prop in person){
//     console.log(prop," : ", person[prop])
// }

// Object.keys(person).forEach((prop)=>{
//     console.log(prop," : ", person[prop])
// })


// const person={
//     name:"Rahul",
//     age:25
// }

// Object.values(person).forEach((value)=>{
//     console.log(value)
// })

// const person=new Object()

// person.name="Rahul"
// person.age=25
 
// console.log(person)

// const person={
//     name:"",
//     age:0,
//     role:""

// }

// const men=Object.create(person)
// men.name="Rahul"
// men.age=25
// men.role="Developer"

// console.log(person)




// let a=[1,2,[3,4],5,6,[7,[8,9]]]
// let b=a.flat(Infinity)
// console.log(b)


// const Person={
//     name:"Rahul",
// }

// const clone=Object.assign({},Person)

// // console.log(Person.name)
// console.log(clone.address.name)


// let num=[ 1,2,3,4,5,4]
// let set=new Set(num)
// console.log(num)
// console.log(set)

//   let uniqueArray=[...set]
//     console.log(uniqueArray)



    let Array=[20,11,30 ,50,5,3,6,78,]
    //  let largest=[0]
    //  for(i of Array){
    //   if(i>largest){
    //     largest=i
    //   }
    //  }
    //  console.log(largest)


    let largest=Math.max(...Array)
    console.log(largest)