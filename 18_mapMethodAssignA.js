const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
 const b=arrayNumbers.map((element)=>{
    return element+10;
});
console.log("================================step 1");
console.log(b);
console.log("================================step 2");
const c=arrayNumbers.map((element)=>{
    return element*element*element;
});
console.log(c);
console.log("=================================step 3");
const z=c.map((element,index)=>{
    console.log(element,index);
});
const u=b.map((element,index)=>{
    console.log(element,index);
});

