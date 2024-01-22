

let arr=["jenny","anshu","rinki"];
console.log(arr);
console.log(...arr);
//  spread operator to expand array
function show(n1,n2,...arg){
   console.log(arg);
}
show(10,20,30,40);
// rest parameter hold the value in the fprm of array;
// ..arg,n1,n2 this is not valid;
