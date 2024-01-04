// Function Expression-FE where unknown/anonmous function
// FE-anoumus function/unknown  stroning function inside variable
// function show(){
    //  named function
// }
var display=function(){
    console.log("display");
}
// call
display();
// console.log(display);
var maleMarriageEligibility= function(gender,age,boyName){
   var res= gender=="male" && age>=21?`Hey ${boyName} you are eligible for marraige`:`hey ${boyName} you are not eligible `;
   console.log(res);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Saurabh");
