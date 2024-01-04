function greaterNumber(){
  var a=10;
  var b=-10;
  var c= a>b?"The greater number is equal to 10":"the greater number is b:";
  console.log(c);
  console.log("========+=================");
  var d=800;
  var e=899;
  var g=d>e?"the greater number is 800":"the greater number is 899";
  console.log(g);


}greaterNumber();


console.log("=======+=====");
function isEvenOrOddNum(){
    var a=29;
    var b=a%2==0?"29 is even":"29 is odd";
    console.log(b);
    var c=44;
    var d=c%2==0?"44 is even":"44 is odd";
    console.log(d);
    var e=0;
    var f=e%2==0?"0 is even":"0 is odd";
    console.log(f);
    var g=101;
    var h=g%2==0?"101 is even":"101 is odd";
    console.log(h);

}isEvenOrOddNum();
console.log("=========+=============");



function wordLength(){
      
    var s1="JavaScript";
    var l=s1.length;
    var res=l%2==0?"javascript length is even":"javascript length is odd";
    console.log(res);
    var s2="developer";
    var l1=s2.length;
    var res=l1%2==0?"developer length is even":"developer length is odd";
    console.log(res);
    // var s1="JavaScript";
    // var l=s1.length;
    // var res=l%2==0?"javascript length is even":"javascript length is odd";
    // console.log(res);
    var s3="Google";
    var l2=s3.length;
    var res=l2%2==0?"Google length is even":"Google length is odd";
    console.log(res);
}wordLength();