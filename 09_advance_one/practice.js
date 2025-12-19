// async function getAllUser(){
//     try {
//         const response= await fetch('https://randomuser.me/api/')
//         const data =await response.json()
//         console.log(data)



//     } catch (error) {
//         console.log("E: ",error)
//     }
//  }

//  getAllUser()


// const promiseOne= new Promise(function(resolve,reject){
//       setTimeout(() => {
//            console.log("RAhul yadav promise one")
//            resolve()
//       }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("promise consumed")
// })

// const promiseTwo=new Promise(function(resolve,reject){
//       setTimeout(()=>{
//         resolve({Name:"Rahul Yadav" ,age :25, emal:"rahulrao@gmail.com"})
//         reject("something went wrong")
//       },1000)
// }).then((user)=>{
//    return user.Name
// }).then((name)=>{
//     console.log(nam)
// }).catch((error)=>{
//     console.log("ERR:" ,error)
// })


// const promiseFive= new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//      let error=true

//      if(!error){
//         resolve({user:'rahuldev',app:'github'})
//      }else{
//         reject("promise is rejected somthint went wrong yess got it !!")
//      }
//     },1000)
// })


// async function consumePromise(){
//    try{
//       const response=await promiseFive
//       console.log(response)
//    } catch(err){
//       console.log(err)
//   }
//   finally{
//    console.log("promise are resolve or rejected")
//   }

// }

// consumePromise()



// async function getAllUser(){
//     try {
//         const response= await fetch("https://randomuser.me/api/")
//         const data= await response.json()
//         console.log(data)
//     } catch {
//         console.log("api not fetch")   
//     }  
// }

// getAllUser()

 

// fetch("https://randomuser.me/api/")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//   console.log(error)
// })




