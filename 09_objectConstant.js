   const developer={
    firstName:"anshu",
    age:32,
    isMarried:true,

}
console.log(developer);
developer.age=34;
console.log(developer);
// this is not allowed
// // developer={

// }
console.log("object freezing");
Object.freeze(developer);
developer.isMarried=false;
developer.firstName="jenny";
console.log(developer);
const arr=[1,2,3,4];
Object.freeze(arr);
arr[1]=5;
console.log(arr);