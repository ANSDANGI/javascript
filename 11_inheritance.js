

class MotherCat{
    constructor(Color,totalLegs){
        this.Color=Color;
        this.totalLegs=totalLegs;

    } 
    mewoing(){
        console.log(`cat is meowing`);
    }

}
class BabyCat extends MotherCat{
    constructor(bodycolor,name,colorye,legs){
           super(colorye,legs);
        this.bodycolor=bodycolor;
        this.name=name;
    }
    // method overriding which is run time plymorphism
    mewoing(){
        console.log("babay cat ");
    }
}
const kitty=new BabyCat("brown","kitty","gray",4);
console.log(kitty);
kitty.mewoing();
