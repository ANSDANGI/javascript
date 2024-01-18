

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
}
const vanue=new Vechicle("venue","pink",123,"petrol",1000);
const jenny=new Vechicle("venue","pink",123,"petrol",1000);
const arrayStudent=[vanue,jenny];
for (const iterator of arrayStudent) {
    console.log(iterator);
    // iterator.getdetails();
}
console.log("===============================");
