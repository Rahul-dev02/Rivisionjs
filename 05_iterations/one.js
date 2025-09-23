
// for(let i=0; i<10; i++){
// const element=i;
// if(i==5){
//     console.log("5 is the best number.")
// }
// console.log(element); 
// }

for(let i=1 ;i<=10;i++){
    // console.log(`outer loop is ${i}`)
    for(let j=1 ;j<=10;j++){
    //    console.log(`inner  loop is ${j} and outer loop is ${i}` )
    // console.log(i + '*' + j +'='+ i*j)
    }
}


let myArr=['thor' ,'Iron Man', 'SpiderMan']

for(let i=0 ; i<myArr.length; i++){
    // const element=myArr[i];
    // console.log(element)
   
    // console.log(myArr[i])
}


for(let i=1 ; i<=20; i++){
    if(i==5){
        console.log("Skip 5")
        continue
    }
    console.log(`value of i ${i}`)
}

