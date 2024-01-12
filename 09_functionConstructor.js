

function Student(id,name,marks){
    this.id=id;
    this.name=name;
    this.marks=marks;
    this.display=function(){
        console.log("inside display method");
    }

}
const stew=new Student(11,"stew",99);
console.log(stew.marks);
const jenny=new Student(22,"Jenny",88);
console.log(jenny.marks);
jenny.display();
