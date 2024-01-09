

const arrayNum=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNum.length);
console.log("==============================================================");
console.log("first element",arrayNum[0]);
console.log("last element",arrayNum[arrayNum.length-1]);
console.log("==========================================================");
console.log("third last element",arrayNum[arrayNum.length-3]);
console.log("=====================================================");
for (const iterator of arrayNum) {
    if (iterator%2==0) {
        console.log(iterator);
    }
}
console.log("======================================");
for (const iterator of arrayNum) {
    if (iterator%2!=0) {
        console.log(iterator);
    }
}
console.log("======================================================");
let sum=0;
for (const key in arrayNum) {
    if (key%2==0) {
        sum=sum+arrayNum[key];
    }
}
console.log("sum of even positioned element:",sum);
console.log("=============================================");
let sum1=0;
for (const key in arrayNum) {
    if (key%2!=0) {
        sum1=sum1+arrayNum[key];
    }
}
console.log("sum of odd positioned element:",sum1);
console.log("================================================================");
let sum2=0;
for (const key in arrayNum) {
    
        sum2=sum2+arrayNum[key];
    
}
console.log("sum of all element:",sum2);
console.log("============================================================");

for (const iterator of arrayNum) {
    if (iterator%5==0) {
        console.log("multiple of 5 ",iterator);
    }
}
console.log("=========================================================");
console.log("is 115 prsent in arraynum",arrayNum.includes(115));
console.log("===============================================================");
console.log("is 115 prsent in arraynum",arrayNum.includes(23));
console.log("=================================================================");
console.log(arrayNum);
let a=arrayNum.splice(3,0,55,66);
console.log(arrayNum);

console.log("=================================================");
console.log("=====================================================");
console.log(arrayNum);
let b=arrayNum.splice(4,3);
console.log(arrayNum);

