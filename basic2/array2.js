const Marvel_heroes=['thar','ironman', 'captain america']
const Dc_heroes=['batman','flash' ,]


// const merge=Marvel_heroes.concat(Dc_heroes)
// console.log(merge)

// const newMerge=[...Marvel_heroes,...Dc_heroes]
// console.log(newMerge)

const flatArr=[2,4,5,6,[23,44],8,[44,[1000,2000]]]
const new_flatArr=flatArr.flat(Infinity)
// console.log(new_flatArr)


// console.log(Array.isArray("rahul"))
// console.log(Array.from("rahul"))
const fAra="hema"
// console.log(Array.from(fAra))

// console.log(Array.from({roll:10}))


const score1=1001;
const score2=1002;
const score3=1003;

console.log(Array.of(score1,score2,score3))