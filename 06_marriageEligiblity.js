function marraige(gender, age){
    if (age<=0 ) {
        console.log("you are not eligible for marraige because you don't fit in our marriage age criteria");
        
    } else {
        if (gender=="male" && age>=21) {
            console.log(`you are ${gender} and your age is ${age} so congratulation you are eligible for marriage `);

            
        }
        else if(gender=="female" && age>=18){
            console.log(`you are ${gender} and your age is ${age} so congratulation you are eligible for marriage `);
        }
        else if(gender=="others" && age>=0 ){
            console.log(`you are ${gender} and your age is ${age} so your marriage eligibility depends on your community `);

        }
        else{
            console.log("sorry you are not eligible");
        }
        
    }











}marraige("male",17);
marraige("male",25);
marraige("female",28);
marraige("female",14);
marraige("others",35);
marraige("others",41);
marraige("NaN",null);
marraige("female",undefined);