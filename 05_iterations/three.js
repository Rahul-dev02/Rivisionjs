
let arr=['bullet', 'glammere', " ",'splender']

for (const bike of arr){
    // console.log(bike)
}

const greetings="hello word!"

for(const greet of greetings){
    if(greet==" "){
        // console.log("breake code ")
        break
    }
    
    // console.log(`Each char is - ${greet}`)
}


// mapp   

const map  =new Map()

map.set("USA","UNITED STATE OF AMERICA")
map.set('IN',"INDIA")
map.set("FR" ,"FRANCE")

// console.log(R)

for(const key of map){
    // console.log(key)
}

for(const [key ,value] of map){
    // console.log(key ,':-',value)
}


const myobja={
    game1:'NFS',
    game2:"SpiderMan"
}

for(const [key ,value] of myobja){
    console.log(key,':-',value)
}

