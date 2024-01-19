const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("==================step1");
arrayNumbers.forEach((element,index)=>{
      console.log( `element,${element},index${index}`);
});
console.log("==================step2");
arrayNumbers.forEach((element)=>{
    if (element>0 ) {
        console.log(element);
    }
});
console.log("==================step3");
let arr=[];
arrayNumbers.forEach((element)=>{
    if (element<0 ) {
        arr.push(element);
    }
});
console.log(arr);
console.log("==================step4");
arrayNumbers.forEach((element)=>{
    if(element%2==0){
        console.log(element);
    }
});

console.log("====================step5");
let sum=0;
arrayNumbers.forEach((element)=>{
    sum=sum+element;
});
console.log(sum);
console.log("=====================step6");
arrayNumbers.forEach((element,index)=>{
    if(index%2==0){
        console.log(element);
    }
});




