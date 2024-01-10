console.log("=============================step 1");
let professor={
    firstName:"Anshu",
    lastName:"Dangi",
    age:23,
    address:"pune",
    state:"Maharastra",
    degrees:{
         engineering:"CSC",
         phd:"Adv computing",
         specification:"English",
    },
    certificates:['Hacker rank participation','certificate in IFE course','certificate in Adv programming']


}
console.log(professor);
console.log("====================step2===========================");
console.log(professor.degrees);
console.log("==============================step 3");
console.log(professor.certificates);
console.log("=======================================step4");
professor.totalIExperience="14 years";
console.log(professor.totalIExperience);
console.log("=============================step5");
professor.age=35;
console.log(professor);
console.log("=========================step6");
professor.certificates.splice(2,0,"Oracle certified");
console.table(professor.certificates);
console.log("=====================================step7");

console.log(professor.certificates.slice(-1));
console.log("======================================step8");
console.log(professor);
console.log("=============================================step9");
for (const iterator of professor.certificates) {
    console.log(iterator);
}

