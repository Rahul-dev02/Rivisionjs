'use strict'
function setUsername(username){
    this.username=username
    console.log("callled")
}

function createUser(username,email,password){
    setUsername.call(this, username)
    this.email=email
    this.password=password
}

const chai=new createUser("rahul",'rahul@',123)
console.log(chai)