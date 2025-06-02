const prompt = require("prompt-sync")();         
	let totalQuestions = 10;
        let score = 0;
        console.log("Subtraction Quiz: You have " + totalQuestions + " questions!");

        for (let i = 1; i <= totalQuestions; i++) {
            let num1 = Math.round(Math.random() * 100);
            let num2 = Math.round(Math.random() * 100);

            let max = Math.max(num1, num2);
            let min = Math.min(num1, num2);
            let correctAnswer = max - min;

            console.log("Question " + i + ": What is " + max + " - " + min + "? ");
            let userAnswer = Number(prompt('enter the answer: ').trim());
	     if(userAnswer != correctAnswer){
		console.log('you have one more chance')
		console.log("Question " + i + ": What is " + max + " - " + min + "? ");
            let userAnswer = Number(prompt('enter the answer: ').trim());
	      
	      }
		

            if (userAnswer == correctAnswer) {
                console.log("Correct!");
                score++;
            } else {
                console.log("Incorrect. The correct answer is " + correctAnswer);
            }
        }

        console.log("\nYour final score: " + score + " out of " + totalQuestions );
	 
