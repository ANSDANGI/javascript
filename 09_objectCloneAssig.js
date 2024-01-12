const bankSbi={
    bankName:"State Bank Of India",
    branch:"Makronia",
    yearOfEstabishment:1955,
    founder:"John Mattai",
}
 const bankLocation={
       street:"chandresekha ward" ,
       City:"Sagar",
       pin:470117,


 }
 console.log("step1================================");
 console.log(bankSbi);
 
 console.log("step2======================================");
 console.log(bankLocation);
 console.log("step3============cloning");
 const s1=Object.assign({},bankSbi);
 console.log("copy of banksbi object :",s1);
 const s2=Object.assign({},bankLocation);
 console.log("copy of banksbi object :",s2);
 console.log("========================step4=================================");
 const rateOfInerest ={
        homeLoanInterest:"eight percent",
        personalLoanInterest:"ten percent",
        dualInterest:"five percent",

 }
 console.log(rateOfInerest);
 console.log("====================step5 merge===================================");
 const merge=Object.assign({},bankSbi,bankLocation,rateOfInerest);
 console.log("merging",merge);
 console.log("step=============================6");
 for (const key in merge) {
    if (merge.hasOwnProperty.call(merge, key)) {
        const element = merge[key];
        console.log(element);
        
    }
 }

 
