
// function  shayMyName(number1,number2){
//      let result=number1+number2
//      return result
//      console.log(result)
// }
// const result=shayMyName(3,4);
// console.log(result)


// function loginUser(userName="Rahul"){
//      if(!userName){
//           console.log("please enter user name") 
//           return
//      }
//      return `${userName} login user Authentication`

// }
//  console.log(loginUser("dipak")) 



// function calculatePrice(...num){
//    return  num;

// }
// console.log(calculatePrice(30,4,60,67,89))







const user={
     username:"RAhulrao",
     price:199
}

function handleObject(anyobject){
   return `username is ${anyobject.username} and price ${anyobject.price}`
}
// console.log(handleObject(user))\
// console.log(handleObject({
//      username:"Hari",
//      price:499}))






//      const myArr=[20,30,40,50];

//      function handleArr(getArr){
//           return getArr[2];

//      }
//      console.log(handleArr(myArr))






function One(){
     const username="Amrita "

     function Two(){
          const website ="sharchat"
          console.log(username);
     }
     Two();
     // console.log(website);   
}
One()



console.log(One(3))
function One(num){
     return num +1
}


console.log(Two(4))
const Two=function(num){
   return num+1
}
