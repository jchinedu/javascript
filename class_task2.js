function getHighScoringCustomers(customers) {
  let highScorers = [];

  for (let i = 0; i < customers.length; i++) {
    if (customers[i].satisfaction >= 80 && customers[i].satisfaction <= 100) {
      highScorers.push(customers[i]);
    }
  }

  highScorers.sort(function(a, b) {
    return b.satisfaction - a.satisfaction;
  });

  let names = [];
  for (let j = 0; j < highScorers.length; j++) {
    names.push(highScorers[j].name);
  }

  return names;
}

let customers = [
  { name: 'Alice', satisfaction: 92 },
  { name: 'Bob', satisfaction: 76 },
  { name: 'Charlie', satisfaction: 88 },
  { name: 'Diana', satisfaction: 81 },
  { name: 'Evan', satisfaction: 600 } 
];

let topCustomers = getHighScoringCustomers(customers);
console.log(topCustomers);

