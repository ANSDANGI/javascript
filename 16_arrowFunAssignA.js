console.log("=======================step1");
const a=()=>{
   console.log(`"Good Morning, Today is Thursday"`); 
}
a();
console.log("=================step2 Apart ");
const b=(n1,n2,n3=1)=>{
    console.log(n1*n2*n3);
}
   
    
 
 b(5,5,2);
 
 b(10,4);
 
 console.log("==========================step3");
 const g=(n1,n2,n3,n4,n5)=>{
    let add=n1+n2+n3+n4+n5;
    return add;
 }
 const j=g(100,100,200,349,756);
 console.log(j);
 const v=g("I am ","learning ","ES6 ",'features ',"indepth");
 console.log(v);


