const prompt = require("prompt-sync")();
let number1 = Number(prompt('enter a number: ').trim());
let pattern = "#";
let space1 = " ";
let space2 = "";

for(let i = 0; i < number1; i++){
   for(let j = 0; j <number1; j++){
	space2 +=(i + j) % 2 == 0? space1 : pattern;
}
	space2 += "\n";
}
console.log(space2);