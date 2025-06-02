const prompt = require("prompt-sync")();

let userAnswer;

		do {
		let firstNumber = (Number)(Math.random() * 100);
		let secondNumber = (Number)(Math.random() * 100);
		if(secondNumber  > firstNumber){
		   SecondNumber = firstNumber
		}

		console.log("firstNumber  -  secondNumber = ? ");
		console.log("-1 to quit\n");
		userAnswer = Number(prompt('enter the answer: ').trim());

		if (userAnswer == -1) break;
	        let sum = firstNumber - secondNumber;

		boolean isAnswer = userAnswer == sum;
		console.log(answer);
		} while(userAnswer == -1);
