async function getAllUser(){
    try {
        const response= await fetch('https://randomuser.me/api/')
        const data =await response.json()
        console.log(data)

    } catch (error) {
        console.log("E: ",error)
    }
 }

 getAllUser()