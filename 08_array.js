


const arrayNum=[2,4,6,8];
console.log(arrayNum);
console.log(arrayNum.length);
console.log(typeof arrayNum);
console.log("==================Read and access value from array ==========================");
 const n1=arrayNum[2];
 console.log(n1);
 console.log("================Traversing value from array");
 for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
 }
 console.log("sum of array");
 let sum=0;
 for (let index = 0; index < arrayNum.length; index++) {
    sum=sum+arrayNum[index];
    
    
 }
 console.log(sum);
 console.log("find index of an element");
//  const indexOf6=arrayNum.indexOf(6);
//  console.log(indexOf6);
 const indexOf6=arrayNum.indexOf(99);
 console.log(indexOf6);
 let array=["Jenny","Menny","Bill"];
 array.push("Elon");
 console.log(array);
 array.unshift("Narayan");
 console.log(array);
 let arrayNumbers=[11,22,33,44,55];
 arrayNumbers.shift(11);
 console.log(arrayNumbers);
 arrayNumbers.pop(55);
 console.log(arrayNumbers);
 let arrayNums=[11,22,33,44,55,66,77];
   let element=arrayNums.slice(2);
 console.log(element);
 const e=arrayNums.slice(1,5);
//  5 exclusive hai
console.log(e);
// replace,remove,
console.log("removing and deleting element");
 let a=arrayNums.splice(3);
 console.log(a);
 console.log(arrayNums);
 let arrayNu=[11,22,33,44,55,66,77];
  let b=arrayNu.splice(2,3);
  console.log(b);
  console.log(arrayNu);
  let c=arrayNu.splice(3,1);
  console.log(c);
  console.log(arrayNu);
  console.log("==================== insert in the middle of array repalce");
  let arrayN=[11,22,33,44,55,66,77];
   let d=arrayN.splice(3,0,99);
   console.log(arrayN);
   let arrayp=[11,22,33,44,55,66,77];
   let f=arrayp.splice(2,1,100);
   console.log(arrayp);









