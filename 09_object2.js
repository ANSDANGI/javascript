


let developer={
     name:"Anshu",
     age:23,
     skills:["java","python","c"],




}
console.log(developer);
console.log(developer.skills);
const k=Object.keys(developer);
console.log(k);
const v=Object.values(developer);
console.log(v);
// nested Array;
console.log(`ye meethod batayegi ke array ke andar ek aur arre hai ke nahi=======>,${Array.isArray(v)}`);
for (const iterator of v) {
    console.log(iterator);
}
  const e=Object.entries(developer);
  for (const iterator of e) {
     console.log(e);
  }
  console.log(e[0][1]);
  console.log(e[1][0]);
  console.log("===================================in operator");
   const isAgeAvailable="age" in developer;
   console.log(isAgeAvailable);
   const isAvailable="city" in developer;
   console.log(isAvailable);
  
  