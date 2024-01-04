var c=function (num) {
    var returnResult="";
    if (num%2==0) {
        returnResult="  even";
    } else {
        returnResult="  odd";      
    }
    return returnResult;
}
 var res=c(45);
 console.log("45 is",res);
 var res=c(70);
 console.log("70 is",res);
 var res=c(67);
 console.log("67 is",res);
 var res=c(98);
 console.log("98 is",res);
 console.log("=================================================================================================");
 var voteEligiblity=function (age) {
    if (age>=18) {
        console.log(`this ${age} age person is eligible for vote`);
    } else {
        console.log(" person below 18 is not eligible for vote");
    }
 }
 voteEligiblity(18);
 voteEligiblity(20);
 voteEligiblity(17);
 voteEligiblity(40);
 console.log("================================================================================================");
 var stringCharacter=function(myString) {
    var d=myString.length;
    if (d>10) {
        console.log("String Contains more than 10 character");
    } else {
         console.log("string contains less than 10 character");
    }
    console.log(`length of string${d}`);
 }
 stringCharacter("JavaScript-ES6")
 console.log("================================================================================================");
 var s1=function (name) {
    if (name.startsWith("Java")) {
        console.log("string start with Java");
    } else {
       console.log("not start with java"); 
    }
    console.log(`name of string is ${name}`);
 }
 s1("JavaScript Language");
