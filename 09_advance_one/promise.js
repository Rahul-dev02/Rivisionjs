

// const promiseOne=new Promise(function(resolve,reject){



    
//     setTimeout(function(){
//         console.log('async promise is completed')
//         resolve()
//     },1000)
// })



// promiseOne.then(function(){
//     console.log("promise consumed")
// })



// new Promise(function(resolve,reject){
  
//     setTimeout(function(){
//         console.log("async task 2")
//     },1000)
//     resolve()
// }).then(function(){
//     console.log("asycn task 2 resolved")
//     console.log("------------------------------------------")
// })





// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise task 3")
//         resolve({usernmae:'rahulrao' ,age:25, city:'noida'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })






// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"rahulhema",password:234})
//         }else{
//             reject('ERROR: Some thing went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{console.log("The promise resove or rejected")})

///////////////////////////////////////////////////////////////////////////////////////////


// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//           resolve({username:'javascript',password:1234})
//         }else{
//             reject("ERROR:javascript erro")
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//    try {
//      const response= await promiseFive
//     console.log(response)
//    } catch (error) { 
//     console.log(error)
//    }
// }

// consumePromiseFive()

//////////////////////////////////////////////////////////////////////////////////

// async function getAllUsers (){
//    try {
//     const response=    await fetch('https://randomuser.me/api/')
//     const data= await response.json()
//     console.log(data)

//    } catch (error) {
//      console.log("E: ",error)
//    }
// }
// getAllUsers()


   fetch('https://api.github.com/users/hiteshchoudhary')
   .then((response)=>{
        return response.json()
   })
   .then((data)=>{
      console.log(data)
   })
   .catch((err)=>{
       console.log(err,"error")
   })