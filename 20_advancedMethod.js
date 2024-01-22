  

// call method on the exiting object
let person={
    name:"anshu",
    age:32,
    isMarried:false,

}
function greet(message,msg) {
    console.log("hello",message,this.name,msg);
    
}
greet.call(person,"hii everyone","how are you");
console.log("================================");
function show(message,msg) {
    console.log("hello",message,this.name,msg);
    
}
show.apply(person,["good morning","how are you"]);
// apply and call are same difference in only Argument
console.log("================bind()");
function display(message,msg) {
    console.log("hello",message,this.name,msg);
    
}
const newFunction=display.bind(person);
newFunction("good morning","how are you");

