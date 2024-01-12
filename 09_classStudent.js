

class Student{
    //    data member or properties
    // id
    // name
    // city
    // marks
    constructor(id,name,city,marks){
          this.id=id;
          this.name=name;
          this.city=city;
          this.marks=marks;
    }
    //  member fuction or method
    getDetails(){
          console.log(`id:${this.id},name:${this.name},city:${this.city},marks:${this.marks}`);
    }
    // constructor
}
 const jenny=new Student(11,"Jenny","pune",70);
 const i=jenny.name;
 console.log(i);
 jenny.getDetails();
 console.table(jenny);
 const bill=new Student(22,"bill","LA",60);
 console.log(bill);
 bill.getDetails();
 const elon=new Student(23,"elon","LA",50);
 const sid=new Student(24,"sid","Brazil",80);
 const arrayStudent=[jenny,bill,elon,sid];
 for (const iterator of arrayStudent) {
     iterator.getDetails();
 }
//  wap to log the details of students having marks greater than equal 80

for (const iterator of arrayStudent) {
    if (iterator.marks>=80) {
        iterator.getDetails();
    }
}
console.log("instance operator");
console.log("TYPEOF OPERATOR");
console.log(elon instanceof Student);