class User {
    constructor(email,password){
        this.email=email
        this.password=password
    }


    get email(){
        return this._email.toUpperCase()
    }
     
    set email(value){
      this._email=value
    }

     get password(){
            return `${this._password}Rahul`
        }

        set password(value){
           this._password=value
        }
}

const Rahul=new User('rahul123gmail',27634374)
console.log(Rahul.email)