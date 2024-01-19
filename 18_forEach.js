
const arrayNum=[55,11,66,18,22,73];
arrayNum.forEach((currentValue,index,array)=>{
        console.log(currentValue,index,array);
});
console.log("using current value");
arrayNum.forEach((currentValue)=>{
    console.log(currentValue);
});
console.log("wap to odd number");
arrayNum.forEach((currentValue)=>{
    if(currentValue%2!==0){
        console.log(currentValue);
    }
});
console.log("========================progrm to traverse th set of collection");
const setOfRollNum=new Set();
setOfRollNum.add(44);
setOfRollNum.add(33);
setOfRollNum.forEach((item)=>{
    console.log(item);
});
// const setOfMap=new Map();
// setOfRollNum.Set(44);
// setOfRollNum.Set(33);
