function dayOfWeek(dayNum) {
    switch (dayNum) {
        case 1:
          console.log(`Day number ${dayNum} =====>Monday `);
          break;
        case 2:
          console.log(`Day number ${dayNum} =====>Tuesday `);
          break;
        case 3:
          console.log(`Day number ${dayNum} =====>wednesday `);
          break;
        case 4:
          console.log(`Day number ${dayNum} =====>Thursday `);
          break;
        case 5:
          console.log(`Day number ${dayNum} =====>friday `);
          break;
        case 6:
          console.log(`Day number ${dayNum} =====>saturday `);
          c;
          break;
        case 7:
          console.log(`Day number ${dayNum} =====>sunday `);
      
        default:
             console.log(`Invalid input Day number ${dayNum} =====> `);
          break;
      }
      
}
dayOfWeek(2);
dayOfWeek(9);
dayOfWeek(null);
dayOfWeek(NaN);
dayOfWeek(undefined);
dayOfWeek(-1);
dayOfWeek(0);
// when we have multiple condition we use switch case if we have two or less than two we use if ielse
