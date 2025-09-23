const myNums=[1,2,3]

// const myTotal=myNums.reduce( function (acc, currval) {
//     console.log(`my acc is ${acc} and my crrval is ${currval}`)
//      return acc +currval
// },5 )

// console.log(myTotal)

// const myTotal=myNums.reduce( (acc,currval)=> acc+currval,0 )

// console.log(myTotal)


const shoppingcart=[
    {
        course_nm:'javascript',
        price:2999
    },
    {
        course_nm:'phy',
        price:699
    },
    {
        course_nm:'ml',
        price:5999
    },
    {
        course_nm:'data science',
        price:1299
    }
];

const Totalpay=shoppingcart.reduce( (acc ,item) => acc+item.price,0 )
console.log(Totalpay)