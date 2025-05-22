let pattern = "#";
let space1 = " ";
let space2 = "";

for(let i = 0; i <= 7; i++){
   for(let j = 0; j <=7; j++){
	space2 +=(i + j) % 2 == 0? space1 : pattern;
}
	space2 += "\n";
}
console.log(space2);