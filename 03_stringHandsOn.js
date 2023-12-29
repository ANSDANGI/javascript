function stringHandsOn(){
   console.log("========step1========");
   var a="  Hey you are doing good, keep it up    ";
   console.log(a);
   console.log("======step2======");
   var b=a.length;
   console.log(`length of string:${b}`);
   console.log("====step3===");
   var c=a.trim();
   console.log(`my string after trim:${c},length of string ${c.length}`);
   console.log("========step4===========");
   console.log(` total number of spaces:${a.length-c.length}`);
   console.log("=======step5============");
    var d=c.charAt(0);
    console.log(d);
    var e=c.charAt(32);
    console.log(e);
    console.log(`character at starting position is:${c.charAt(0)},character at last position is${c.charAt(32)}`);
    console.log("======step6=====");
    
    var p=c.split(" ")
    console.log(p);
    console.log(`total no of word which are available in string,${p.length}`);
    console.log("==========Step7===========");
    console.log(`index of letter good is:${c.indexOf("good")}`);
    console.log("============step8=========");
    console.log(c.slice(22,33));
    console.log(c.substring(22,33));

    console.log("=========step9===========");
     var l=c.endsWith("up");
     console.log("yes it is end with up;",l);
     console.log("=========step10==============");
     var z=c.startsWith("Hey");
     console.log("yes it is starts with Hey:",z);





   


   


}
stringHandsOn();