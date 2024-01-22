let str1="heart";
let str2="earth";
const array=str1.split("");
array.sort();
const r=array.join("");
console.log(r);
const arry2=str2.split("").sort().join("");
console.log(r===arry2?true:false);