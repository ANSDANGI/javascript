function Bank(bankName,location,ifscCode,branchCode,openTime,closeTime ){
     this.bankName=bankName;
     this.location=location;
     this.ifscCode=ifscCode;
     this.branchCode=branchCode;
     this.getDetails=function(){
        console.log(`bank name:${this.bankName},location:${this.location},ifsccode:${this.ifscCode},branchcode:${this.branchCode}`);
     }
     
     
}
const a=new Bank("YES  BANK","pune","yES123",1234,);


const a1=new Bank("SBI Bank","pune","sbi123",1222,);

const a2=new Bank("MAHINDRA  BANK","pune","mah123",1777);

const a3=new Bank("Axis BANK","pune","axis123",1266);
a.getDetails();
a1.getDetails();
a2.getDetails();
a3.getDetails();



console.log("===============");
console.log("=====================================================prototype");
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST"
console.log(`SBI Bank:${a1.bankName} opening time is:${a1.openTime} and closing time is:${a1.closeTime}`);
console.log(`Axis Bank:${a3.bankName} opening time is:${a3.openTime} and closing time is:${a3.closeTime}`);
console.log(`Yes Bank:${a.bankName},branch code:${a.branchCode} opening time is:${a.openTime} and closing time is:${a.closeTime}`);


