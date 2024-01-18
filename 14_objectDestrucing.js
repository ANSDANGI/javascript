
let person={
    firstName:"Anshu",
    age:"32",
    city:"pune",
    country:"Bharat",

}
// let firstName=person.firstName;
// console.log(firstName);
let {firstName,age,country,pin=123}=person;
//  object disturing;
console.log(firstName,age,country,pin);
console.log("=========================array destrucing");
let arr=[10,20,30];
const e=arr[0];
let[a,marks,fatherage,apple=28]=arr;
console.log(a,marks,fatherage,apple);
// array destrucing with default value;
