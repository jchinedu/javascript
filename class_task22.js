// function getHighScoringCustomers(customers) {
//   let names;
//   let temp;
//   let i, j;


//   let count = 0;
//   for (i = 0; i < customers.length; i++) {
//     if (customers[i].satisfaction >= 80 && customers[i].satisfaction <= 100) {
//       count++;
//     }
//   }


//   let highScorers = new Array(count);
//   names = new Array(count);

//   let index = 0;
//   for (i = 0; i < customers.length; i++) {
//     if (customers[i].satisfaction >= 80 && customers[i].satisfaction <= 100) {
//       highScorers[index] = customers[i];
//       index++;
//     }
//   }

//   for (i = 0; i < highScorers.length - 1; i++) {
//     for (j = 0; j < highScorers.length - 1 - i; j++) {
//       if (highScorers[j].satisfaction < highScorers[j + 1].satisfaction) {
//         temp = highScorers[j];
//         highScorers[j] = highScorers[j + 1];
//         highScorers[j + 1] = temp;
//       }
//     }
//   }

  
//   for (i = 0; i < highScorers.length; i++) {
//     names[i] = highScorers[i].name;
//   }

//   return names;
// }

// let customers = [
//   { name: 'Alice', satisfaction: 92 },
//   { name: 'Bob', satisfaction: 76 },
//   { name: 'Charlie', satisfaction: 88 },
//   { name: 'Diana', satisfaction: 81 },
//   { name: 'Evan', satisfaction: 600 }
// ];

// let topCustomers = getHighScoringCustomers(customers);
// console.log(topCustomers);

function  business(something){
result = something.filter(item => item.satisfaction >=80 && item.satisfaction <= 100)

result.sort((a,b) => a.satisfaction - b.satisfaction);
return result
  
}
console.log(business(customers = [
  { name: 'Alice', satisfaction: 92 },
  { name: 'Bob', satisfaction: 76 },
  { name: 'Charlie', satisfaction: 88 },
  { name: 'Diana', satisfaction: 81 },
  { name: 'Evan', satisfaction: 600 }
]))


