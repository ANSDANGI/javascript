console.log("==========================Step 1===============================");
const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit_seasonal);
console.log(fruit_seasonal[0]);
console.log(fruit_seasonal[fruit_seasonal.length-1]);
console.log("=========================================step2==========================================");
console.log(fruit_seasonal);
let a=fruit_seasonal.unshift("Papaya");
console.log(a);
console.log(fruit_seasonal);
console.log("=============================================================================================");
console.log(fruit_seasonal);
let c=fruit_seasonal.splice(4,1);
console.log(fruit_seasonal);
console.log("==========================================================================");
console.log(fruit_seasonal);
let d=fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);
console.log("==========================================================================================");
console.log(fruit_seasonal);
let x=fruit_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruit_seasonal);
console.log("===============================================================");
console.log(fruit_seasonal);
let r=fruit_seasonal.splice(2,1,"Kiwi");
console.log(fruit_seasonal);
console.log("==========================================");
console.log(fruit_seasonal);
let g=fruit_seasonal.slice(1,5);
console.log(g);
console.log("=================================");
console.log(fruit_seasonal);
for (let index = 4; index < fruit_seasonal.length; index++) {
    const element = fruit_seasonal[index];
    console.log(element);
    
}



