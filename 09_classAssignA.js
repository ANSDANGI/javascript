class Vechicle{
   name
   color
   modelNo
   typeOfFuel
   weight
   constructor(name, color,modelNo,typeOfFuel,weight   ){
       this.name=name;
       this.color=color;
       this.modelNo=modelNo;
       this.typeOfFuel=typeOfFuel;
       this.weight=weight;
   }
   getDetails(){
       console.log(`viecle name:${this.name},color:${this.color},modelno:${this.modelNo},typeoffuel:${this.typeOfFuel},weight in kg:${this.weight}`);
   }


}
console.log("===========================step1");
const a=new Vechicle("car","pink",12345,"petrolbased",1000);
console.log(a);
const b=new Vechicle("bus","pink",12345,"petrolbased",20000);
console.log(b);
const c=new Vechicle("truck","green",3455,"petrolbased",15000);
console.log(c);
const d=new Vechicle("bike","yellow",12546,"petrolbased",1000);
console.log(d);
const e=new Vechicle("cycle","red",12888,"no fuel required",500);
console.log(e);
const arr=[a,b,c,d,e];
for (const iterator of arr) {
    iterator.getDetails();
}
console.log("====================================Step2=========================================");
class College{
     name
     numberOfDepartment
     founder
     placementPercentage
     constructor(name,numberOfDepartment,founder,placementPercentage){
        this.name=name;
        this.numberOfDepartment=numberOfDepartment;
        this.founder=founder;
        this.placementPercentage=placementPercentage;
     }
     display(){
       console.log(`name of college:${this.name},numberofdepartment:${this.numberOfDepartment},founder:${this.founder},placement in percentage:${this.placementPercentage}`);
     }
     traverseObject(obj){
       for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            console.log(key,element);
        }
       }
     }




}
const a1=new College("OIST",7,"Mohanlal Singh",20);
a1.display();
const a2=new College("OCT",8,"Vijay Rana",100);
a2.display();
const a3=new College("LNCT",5,"khushi Singh",80);
a3.display();
const a4=new College("BHU",10," praveen thakral",70);
a4.display();
console.log("==================================step3====================================");
a1.traverseObject(a1);
a2.traverseObject(a2);
a3.traverseObject(a3);
a4.traverseObject(a4);







