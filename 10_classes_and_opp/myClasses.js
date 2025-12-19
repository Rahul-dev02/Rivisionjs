
// class User{

//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return  `${this.password}abc`
//     }

//     chnageUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User('Rahul','rahulrao320',9264)
// console.log(chai.chnageUserName())




function User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const chaiC=new User("dipak",'dipak@123',700)

console.log(chaiC.encryptPassword())