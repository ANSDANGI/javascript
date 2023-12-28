console.log("============step1==========");
function hello(){
    console.log("hello , I am Anshu");
}
hello();
function read(){
   console.log("reading books on the daily basis is good habit");
}
read();

console.log("=============step2===========");
function personalDetails(firstName,LastName,collegeName){
    console.log("firstname",firstName,"lastname",LastName,"collegename",collegeName);
}personalDetails("Anshu","Dangi","Oriental");
console.log("========step3============");
function swapValues(a,b){
   console.log("before swipping:",a,b);
   var temp=a;
   a=b;
   b=temp;
   console.log("after swipping:",a,b);

}swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("===========step4========");
function addThreeValues(n1,n2,n3){
     var sum=n1+n2+n3;
     return sum;
}
 var a=   addThreeValues(10.23,600,40);
 console.log("sum",a);
 var a=   addThreeValues("Hello","Good","Morning");
 console.log("sum",a);



