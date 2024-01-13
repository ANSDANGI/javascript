function fact(num) {
    if (num==0 || num==1) {
        return 1;
        
    }
    if (num<0) {
        return 'Invalid';
    }
     let result=1;
    for (let i = num; i>=1; i--) {
         result=result*i;
        
    }


console.log(result);







}
let c=fact(1);
console.log(c);
// function isPrime(num) {
    
// for (let index = 2; index < num; index++) {
//     if (7%index==0) {
//         return false;
//     }
    
// }
// return true;
// }
// let b=isPrime(4);
// console.log(b);
