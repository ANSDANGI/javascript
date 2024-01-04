var maleMarriageEligibility=function (gender,age,boyName) {
    var res=gender=="male" && age>=21?`Hey ${boyName} you are eligible for marraige`:"Not eligible for marriage your age is not fit in critria";
    console.log(res);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Stew Jobs");
console.log("=========+=================");
var femaleMarriageEligibility=function(gender,age,girlName){
  var res=gender=="female"&& age>=18?`Hey ${girlName} you are eligible for marriage`:"not eligible for marriage";
  console.log(res);
} 
femaleMarriageEligibility("female",16,"jenifer");
femaleMarriageEligibility("female",27,"Malinda Gates");
console.log("======+======");