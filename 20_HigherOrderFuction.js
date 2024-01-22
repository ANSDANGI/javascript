


function greet(callback) {
    console.log("Inside greet function");
    callback();
}
const talk=function (params) {
    console.log("Good Morning");
}
greet(talk);
