
const isNotesAvailable=false;;
const promiseNotes=new Promise(function(sucess,reject){
   if (isNotesAvailable) {
          sucess("sharaing the notes")
   }
   reject("sorry guys I didn,t get time");
});
promiseNotes.then(function(sucess){
    console.log("thanku master");
    console.log(sucess);
}).catch(function(failure){
    console.log(failure);
    console.log("very khadus teachar");
}).finally(function(){
    console.log("I must have my notes");
})