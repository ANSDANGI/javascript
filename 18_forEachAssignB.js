class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
         this.emp_id=emp_id;
         this.emp_name=emp_name;
         this.emp_dept=emp_dept;
         this.emp_salary=emp_salary;
         this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`id of employee:${this.emp_id},name of employee:${this.emp_name}:department of employee:${this.emp_dept},salary of employee:${this.emp_salary},company:${this.emp_company} `);

    }
    getBasic(){
        console.log(`name:${this.emp_name},company:${this.emp_company}`);
    }
    getDetails1(){
        console.log(`name ${this.emp_name},department:${this.emp_dept}`);
    }
    getDetails2(){
        console.log(`name ${this.emp_name},salary:${this.emp_salary},company:${this.emp_company}`);
    }
}
const emp_anil=new Employee(22,"Anill","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("===================================Step1");
 arrayEmployees.forEach((emp)=>{
     if (emp.emp_company=="TCS") {
        emp.getBasic();
     }
});
console.log("=========================step2");
arrayEmployees.forEach((emp)=>{
    if (emp.emp_salary>=50000) {
       emp.getDetails();
    }
});
console.log("========================step3");
let sum=0;
arrayEmployees.forEach((emp)=>{
    return sum=sum+emp.emp_salary;
});
console.log(sum);
console.log("===========================step4");
let sum1=0;
arrayEmployees.forEach((emp)=>{
    sum1=sum1+emp.emp_salary;
});
console.log(sum1/arrayEmployees.length);

console.log("================================step5");

arrayEmployees.forEach((emp)=>{
        if (emp.emp_dept=="IT" || emp.emp_dept=="HR") {
            if (emp.emp_salary>=75000) {
                 emp.getDetails();
            }
        }
    
});



 


