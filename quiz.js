const prompt = require("prompt-sync")();         
	let totalQuestions = 10;
        let score = 0;
	//const time = Date.now();
	//const timetaken = (Date.now()/1000 - time).toFixed(2)
        console.log("Subtraction Quiz: You have " + totalQuestions + " questions!");

        for (let i = 1; i <= totalQuestions; i++) {
            let num1 = Math.round(Math.random() * 100);
            let num2 = Math.round(Math.random() * 100);

            let max = Math.max(num1, num2);
            let min = Math.min(num1, num2);
            let correctAnswer = max - min;
	    console.log("choose your questions from 1-10");
	    let choice = Number(prompt("enter the number: "));
            console.log("Question " + choice * i + ": What is " + max + " - " + min + "? ");
	    console.log("A =  34");
	    console.log("B =  45");
	    console.log("C = ", correctAnswer);
	    console.log("D =  67");
            let userAnswer = (prompt('enter the answer: ').trim());
	     if (userAnswer == "C") {
                console.log("Correct!");
                score++;
            } 
	     else if(userAnswer != correctAnswer){
		console.log('you have one more chance')
		let num1 = Math.round(Math.random() * 100);
                let num2 = Math.round(Math.random() * 100);
		console.log("Question " + i + ": What is " + max + " - " + min + "? ");
		 console.log("A =  34");
	    console.log("B =  45");
	    console.log("C = ", correctAnswer);
	    console.log("D =  67");

            let userAnswer = Number(prompt('enter the answer: ').trim());
	      
	      }
		

            else {
                console.log("Incorrect. The correct answer is " + correctAnswer);
            }
        }

        console.log("\nYour final score: " + score + " out of " + totalQuestions );
	//console.log(`total time taken is: ${timetaken} second`);
 
