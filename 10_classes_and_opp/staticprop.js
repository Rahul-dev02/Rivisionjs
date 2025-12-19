class User{
    constructor(usernmae){
        this.usernmae=usernmae
    }

    logMe(){
        console.log(`UserNMAE is ${this.usernmae}`)
    }

  static  createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(usernmae,email){
        super(usernmae)
        this.email=email
    }

}


const iphone=new Teacher('iphone','@gmail.com')
iphone.logMe()
console.log(iphone.createId())
// const static=new User('RAHUL YADAV')
// console.log(static.createId())