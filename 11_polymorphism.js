// abitity to act in more than one form
// compile time:method overloading
// method overloading:compile time

class Student{
    constructor(rollNo,name){
        this.rollNo=rollNo;
        this.name=name;
    }
    marks(maths,physics){
        console.log(`${maths},${physics}`);
        console.log(arguments);
        console.log(typeof arguments);
        console.log(this);
        if (arguments.length==2) {
            console.log(`${maths+physics}`);
        }
        if (arguments.length==1 || physics==undefined) {
            console.log(`${maths+0}`);
        }
    }
}
const jenny=new Student(11,"jenny");
console.log(jenny);
jenny.marks(34,6);
jenny.marks(60);