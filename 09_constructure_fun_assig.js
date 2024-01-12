function Bank(bankName,location,ifscCode,branchCode,openTime,closeTime ){
     this.bankName=bankName;
     this.location=location;
     this.ifscCode=ifscCode;
     this.branchCode=branchCode;
     this.openTime=openTime;
     this.closeTime=closeTime;
     
}
const a=new Bank("YES  BANK","pune","yES123",1234,"9 AM IST","6 PM IST");
console.log(a);
const a1=new Bank("SBI Bank","pune","sbi123",1222,"9 AM IST","6 PM IST");
console.log(a1);
const a2=new Bank("MAHINDRA  BANK","pune","mah123",1777);
console.log(a2);
const a3=new Bank("Axis BANK","pune","axis123",1266,"9 AM IST","6 PM IST");
console.log(a3);
console.log("===============");
console.log("open time of SBI is:",a1.openTime,"closing time of SBI",a1.closeTime);
console.log("Bank Name:",a3.bankName,"open time of axisbank is:",a3.openTime,"closing time of axisbank",a3.closeTime);
console.log("Bank Name:",a.bankName,"open time of axisbank is:",a.openTime,"closing time of axisbank",a.closeTime,"branch code:",a.branchCode);

