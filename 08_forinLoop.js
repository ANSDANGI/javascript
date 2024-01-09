


console.log("traversing an array");
let sum=0;
let arrayN=[11,22,33,44,55,66,77];
for (const key in arrayN) {


      sum=sum+arrayN[key];
        
     
    
}
console.log(sum);
let string="anshu";
for (let i in string) {
    console.log(string[i]);
}
console.log("traversing an array for of");
for (const iterator of arrayN ){
    console.log(iterator);
}
let sumNum=0;
let arrayNum=[4,5,6,7,3];

for (let iterator of arrayNum) {
    sumNum=iterator+sumNum;
    
}
console.log(sumNum);
const str="Developer";
const vowels="aeiou";
let couunt=0;
for (const iterator of str) {
    console.log(iterator);
    if (vowels.includes(iterator)) {
        couunt=couunt+1;
    }
}
console.log(couunt);
    
