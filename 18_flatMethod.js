const array=[2,3,4,[50,4]];
console.log(array);
 const newArray=array.flat();
 console.log(newArray);
//  depth=1 the depth=0
const aa=[2,3,4,[50,4],[4,5,[9,4]]];
const bb=aa.flat();
const cc=aa.flat(2);
console.log(cc);
// Assignment===========>flatMap()====>learn your self;
