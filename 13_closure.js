

var globalVariable=100;
function outerFun(){
    let auterFunVariable=200;
    let innerFun=function(){
         let inner=300;
         console.log(inner);
         console.log(auterFunVariable);
         console.log(globalVariable);
         
    }

    return innerFun



}
// let result=outerFun();
// console.log(result);
// result();
outerFun()();