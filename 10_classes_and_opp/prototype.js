// let myHero=['thor' ,'spiderman']

// let heroPower={
//     thor:'hammar',
//     spiderman:'sling',

//     getSpiderPower:function(){
//         console.log(`spidy power is :${this.spiderman}`)
//     }
// }

// Object.prototype.Rahul=function(){
//     console.log(`Rahul is present in all object`)
// }

// Array.prototype.heyRahul=function(){
//     console.log('ARRAY')
// }

// // heroPower.heyRahul()
// myHero.heyRahul()




let str1='javascript        '


String.prototype.trueLength=function(){
    console.log(`strig name :${this}`)
    console.log(`${this.trim().length}`)
}


str1.trueLength()
"rahul".trueLength()