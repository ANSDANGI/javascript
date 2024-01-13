function factorialofWordsCount(str)
{ 
    if (str==0) {
        return 1;
    }
    if (str==null || str==undefined || str==NaN) {
        return "Invalid input"
    }

    let a=str.split(" ");
    console.log(a.length);
   
   
//    if (a.length==null || a.length==undefined || a.length==NaN) {
//        return "Invalid input"
//    }
   
   let multiply=1;
   for (let index = a.length; index>=1; index--) {
    
      multiply=multiply*index;
   }
   return multiply;
}
var a=factorialofWordsCount("revision is the mother of Success");
console.log(a);
var b=factorialofWordsCount("we never fail, we always learn, mind it");
console.log(b);
var c=factorialofWordsCount(null);
console.log("you give input null",c);
var d=factorialofWordsCount("");
console.log("yougive empty string 0 so factorial is one",d);
var e=factorialofWordsCount("Anshu Dangi");
console.log("number of words in my name and factorail of no of words",e);
