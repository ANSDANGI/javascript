

// function with argument no retuen value

function square(num){
    
   console.log("givien value is",num);
   var result=num*num;
   console.log("result is",result);
}
square(25);
square(12);
square(60);

// function with argument and return value

function multiply(n1,n2,n3){
   console.log("given numbers are",n1,n2,n3);
   var res=n1*n2*n3;
   return res;
}
 var a= multiply(5,5,5);
 console.log(a);
 var a= multiply(25,3,22);
 console.log(a);
 function swap(n1,n2){
   console.log("before swap",n1,n2);
   var temp=n1;
   n1=n2;
   n2=temp;
   console.log("after swap",n1,n2);
 }
 swap(100,200);
 swap("anshu","anu");
