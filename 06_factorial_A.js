function factorialOfNum(num){
    if (num==0 || num==1) {
        return 1;
    }
    if (num==undefined || num==null || num==NaN) {
        return "Invalid Input sorry "
    }
   let multiply=1;
   for (let index = num; index>=1; index--) {
         multiply=multiply*index;
    
   }
   return multiply;






}
let a=factorialOfNum(5);
console.log(a);
let b=factorialOfNum(3);
console.log(b);
let c=factorialOfNum(null);
console.log(c);
let d=factorialOfNum(8);
console.log(d);
let e=factorialOfNum(undefined);
console.log(e);
let f=factorialOfNum(9);
console.log(f);
let g=factorialOfNum(0);
console.log(g);