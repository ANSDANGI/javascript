var gradeSystem=function(marks){
    if (marks<=0 || marks>100 || marks==undefined || isNaN(marks) ){
        console.log(`${marks} Invalid Input...............`);
    } else {
        if (marks<35) {
            console.log(`${marks} unfortunately you are failed`);
        } 
        else{
            if(marks>35 && marks<50){
                console.log(`${marks} you are pass.Grade====>c`);
            }
            else if(marks>=50 && marks<70){
              console.log(`${marks} you are pass .Grade====>b`);
            }
            else{
                console.log(`${marks} you are pass. Grade===>A`);
            }
        }
            
        
        
    }
    
}
gradeSystem(48);
gradeSystem(80);
gradeSystem(0);
gradeSystem(undefined);
gradeSystem(null);
gradeSystem(NaN);





