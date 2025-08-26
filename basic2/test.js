// const obj1 ={a:'1'}
// const obj2 ={b:'2'}

// const obj3={...obj1,...obj2}
// console.log(obj3)


const tinderUser={
    id:123,
    name:"Rahulk",
    isLogin:false
    
}
// console.log(Object.keys(tinnaderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"))



const course={
               id:100,
               name:"hitesh",
               nameOfCourse:"jshindi"
}

const {nameOfCourse:noc}=course;
console.log(noc)
