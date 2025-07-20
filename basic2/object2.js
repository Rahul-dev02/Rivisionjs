// const tinderUser= new Object()
const tinderUser={}
tinderUser.id="abd234"
tinderUser.name="Rahul yadav"
tinderUser.logedIn= false


// console.log(tinderUser)

// const regularUser={name:"rahul",
//                    FullName:{
//                     first:"rahul",
//                     last:"yadav",
//                     letter:{
//                         fir:"r",
//                         las:"l"
//                     }
//                    }
// }
// console.log(regularUser.FullName.letter.las)



 
// const info1={name:"Rahul" ,
//              last:"yadav" 
//                 }
//  const infoDetails={age:24,
//                      email:"rahulrao14320@gmail.com" 
//  }             
 
// const finalObj= Object.assign({},info1 ,infoDetails)
// // console.log(finalObj)

// console.log(Object.keys(tinderUser))


const course={
               id:100,
               name:"hitesh",
               nameOfCourse:"jshindi"
}

const {nameOfCourse:ofCourse}=course
console.log(ofCourse) 