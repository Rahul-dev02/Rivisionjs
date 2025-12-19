

// const user={
//     userName:"rahil@334",
//     login:23,
//     sing:true,
//     getUserDetauls:function (){
//         console.log(`username: ${this.userName}`)
//         console.log("got user details")

//     }
// }

// console.log(user.userName)
// console.log(user.getUserDetauls()) 


function User(userName,loginCount,isLogedIn){
    this.userName =userName
    this.loginCount=loginCount
    this.isLogedIn=isLogedIn
    
    this.greething=function(){
        console.log(`Welcome  ${this.userName}`)
    }
    return this
}

const userOne=new  User("Rahul",34,true)
const userTwo=new User("dipak",18,false)

console.log(userOne)
// console.log(userTwo)