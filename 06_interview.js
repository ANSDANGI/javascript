var a1=function(gradScore,hscScore,sscScore,candidateName){
   if (gradScore>=70 || hscScore>=80 || sscScore>90) {
       console.log( `congrats ${candidateName}- you are eleigible for tcs interview`);
   } else {
     console.log(`Sorry ${candidateName}- you are not eleigible for tcs interview`);
   }
}
a1(80,86,90,"anshu");
a1(70,65,55,"anuja");
a1(60,79,88,"Rinki");