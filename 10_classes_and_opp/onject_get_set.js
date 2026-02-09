const User={
  _email :'hjx@1344',
  _password: 'dffg',

  get email(){
    return this._email.toUpperCase()
  },
  set password(value){
      this._email=value
  }


}
console.log(User.email)