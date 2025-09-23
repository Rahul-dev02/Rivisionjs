// const coading=["js","java","ruby","cpp" ,"python"];

// const value= coading.forEach( (item)=>{
//     //  console.log(item)
//     return item
// } )

// console.log(value)



const myNums=[1,2,3,4,5,6,7,8,9,10]

//  const num=  myNums.filter( (item)=> {
//     return item>4
// } )
//  console.log(num)

const newNums=[]

// myNums.forEach( (num)=>{
//    if(num>4){
//     newNums.push(num)
//    }
// } )

// console.log(newNums)


///////////////////////////////////////////////*css*/`
    

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 2012 },
  { title: 'Book Eight', genre: 'Science', publish: 1995, edition: 2015 },
  { title: 'Book Nine', genre: 'Fiction', publish: 2003, edition: 2018 },
  { title: 'Book Ten', genre: 'History', publish: 2011, edition: 2020 }
];


let userbook=books.filter( (bk)=> {
   return bk.genre==='History'
} )

userbook=books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==="History"
} )

console.log(userbook)