
// const ke value upadate nahi kar sakte let var ke kar sakte
// declare and intilization at same line if not then showing error  we can not update or change value;
const country="India";
let age;
console.log(age);
age=32;
var city;
city="pune";
console.log(city);
age=34;
console.log(age);
// redeclaration nahi kar sakte const mai for const let  var ke liye kar sakte hai hum;
var city="mumbai";
console.log(city);
// hum baa t karege ab scope ke 
if(true){
   var n1=100;
   let n2=200;
   const n3=300;
}
console.log(n1,"function scope");
// console.log(n2);
// console.log(n3);
function show() {
    for (let index = 0; index < 2; index++) {
        var s1="S1";
        let s2="S2";
        const s3="S3";
    
        
    }
    console.log(s1); 
}show();
// console.log(s2);
// console.log(s3);

