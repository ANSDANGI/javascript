
const developer={
    firstName:"anshu",
    age:32,
    isMarried:true,

}
console.log("=========================object clone");
  const newDeveloper=Object.assign({},developer);
  newDeveloper.firstName="jenny";
  console.log(newDeveloper);

  console.log(developer);
  const user={
    name:"bill",
    designation:"CEO",
  }
  const address={
      city:"LA",
      country:"USA",
      pin:112233,

  }
   Object.assign(user,address);
const merge=Object.assign({},user,address);
  console.log(user);
  console.log(address);
  console.log(merge);