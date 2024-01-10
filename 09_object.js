

let person={
    firstName:"Anshu",
    age:25,
    isMarries:false,
    skill:["css","html"],
}
person.skill.push("c");
console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);
person.Designation="software";
console.log(person);
person.age=33;
console.log(person);
person.isMarries=true;
console.log(person);
console.table(person);
delete person.firstName;
console.table(person);
console.log("empty object");
let address={
    
}
address.city="pune";
console.log(address);
let user={
    userName:"Jenny",
    country:"USA",
   address: {
        city:"pune",
        street:"wakad",
        pin:411057,
        getAdress:function () {
            console.log(`complete address ${this.street},${this.city},${this.pin},${this.flatNo}`);
        }
    },

    show:function () {
        console.log("Inside show function");
    }

}
console.log(user);
let country=user.country;
console.log(country);
user.show();
console.log(user.address.pin);
user.address.flatNo=121;
console.log(user.address);
user.address.getAdress();
let developer={
    firstName:"pooja",
    age:23,
}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`key=======>${key},value=================${element}`);
        
    }
}