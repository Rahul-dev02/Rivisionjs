
class User{
    constructor(username){
        this.username=username
       
    }

    logMe(){
        console.log(`USERNMAE is ${this.username}`)
    }
}

 class Teacher extends User{
    constructor(username,email,password){
         super(username)
         this.email=email
         this.password=password

    }  
    addcourse(){
        console.log(`A new courses added by ${this.username}`)
    }
       

 }

 const chai= new Teacher("rsahulji",'gsw355',6647)
 chai.addcourse()

 const masalaChai=new User('masalachai')
 masalaChai.logMe()