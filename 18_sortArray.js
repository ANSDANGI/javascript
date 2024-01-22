const array=["jenny","Elon","Stew","Bill"];
console.log("=====================before reverse");
console.log(array);
console.log("=======================after");
array.reverse();
console.log(array);
const arr=["jenny","Elon","Stew","Bill"];
console.log(arr);
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

console.log("sorting number array in asending order" );
const arrayNum=[20,1,50,9,79,8];
arrayNum.sort((a,b)=>{
     return a>b ? 1:-1;
     
});
console.log(arrayNum);
// by default sort in asecending order it comapare only first digit not work properly for array ;
console.log("=========storting in desending order");
arrayNum.sort((a,b)=>{
    return a>b ? -1:1;
    // arrayNum.reverse() second way of reversing array;
    
});
console.log(arrayNum);

 const isPalandrom=function(word) {
    
}
const result=isPalandrom("MADAM");
console.log(result);
