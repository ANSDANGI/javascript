function basic(s1){
    let vowelCount=0;
    for (let index = 0; index <s1.length; index++) {
        let ch=s1.charAt(index).toLowerCase();
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'|| ch=='u') {
              vowelCount=vowelCount+1;
        }
        
    }
    console.log("total number of vowel is",vowelCount);
}basic("I am very good IT developer");
console.log("===============step========================================");
function sum() {
    let add=0;
    for (let index = 1; index <=5; index++) {
        add=add+index*index*index;

        
    }
    console.log(add);
}sum();
console.log("==============================step=======================");
// function oddPositonedChars(str){
//    for (let i = 0; i <str.length; i++) {
//     let ch=str.charAt(i);
//     if (ch%2!=0 && char!="") {
//         console.log(ch);
//     }
    
    
//    }
// }oddPositonedChars("Hard work always pays back");