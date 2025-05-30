function AtmValidation(cardnumber){
 for (let i = 0; i < cardnumber.length; i++) {
    if (typeof cardnumber[i] !== "number" || isNaN(cardnumber[i])) {
      return { valid: false, reason: "Card number contains non-numeric values" };
    }
  }
 let visacard = {
		valid: true,
		issuer: "Visacard",
		};

let Mastercard = {
		valid: true,
		issuer: "Mastercard",
		};
let Discover = {
		valid: true,
		issuer: "Discover",
		};
let AmericanExpress = {
		valid: true,
		issuer: "AmericanExpress",
		};
let invalid = {
	       invalid: false,
	       reason: "invalid length",
	      };

if(cardnumber[0] == 5 && cardnumber.length == 16) return Mastercard;
else if(cardnumber[0] == 5 && cardnumber.length != 16) return invalid;
if(cardnumber[0] == 4 && cardnumber.length == 16) return visacard;
else if(cardnumber[0] == 4 && cardnumber.length != 16) return invalid;
if(cardnumber[0] == 6 && cardnumber.length == 16) return Discover;
else if(cardnumber[0] == 6 && cardnumber.length != 16) return invalid;
if(cardnumber[0] == 3 && cardnumber.length == 15) return Discover;
else if(cardnumber[0] == 3 && cardnumber.length != 15) return invalid;
};

firstnum = [1,2,3,4,5,6,7,8,9,3,5,6,7,8,6];
secondnum = [2,2,3,4,5,6,7,8,9,3,5,6,7,8,6];
thirdnum = [3,2,3,4,5,6,7,8,9,3,5,6,7,8,6];
fourthnum = [4,2,3,4,5,6,7,8,9,3,5,6,7,8,6];
fifthnum = [5,2,3,4,5,6,7,1,9,3,5,6,7,8,6];




let result = AtmValidation(fifthnum);

console.log(result)

