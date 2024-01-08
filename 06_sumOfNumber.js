// sum of number 1,2,3,4,5,6,10
let sum=0;
for (let i = 1; i<= 10 ; i++) {
    sum=sum+i;
    
    
    
}
console.log(sum);
// wap to find the multipication from 1 to 5
let multiply=1;
for (let i = 1; i <=5; i++) {
    
    multiply=multiply*i;
}
console.log(multiply);


let str="Developer UI";
let vowelCount=0;
for (let index = 0; index<str.length; index++) {
     
     let ch=str.charAt(index).toLowerCase();
     if(ch=='a' || ch=='e' || ch=='i' || ch=='o' ||ch=='u'){
             vowelCount=vowelCount+1;
     }
     
    
}
console.log(vowelCount);
let str1="Developer";
let result="";
for (let index = str1.length-1; index>=0; index--) {
//  result=result+str1.charAt(index);
result=result.concat(str1.charAt(index));

    
}
console.log(result);
// char=="" character empty na ho
