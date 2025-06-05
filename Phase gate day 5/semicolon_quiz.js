const prompt = require("prompt-sync")({ sigint: true });

const questions = [
  {
    number: 1,
    question: "What is the capital of Kano?",
    options: { A: "fagge", B: "Kano", C: "Ungogo", D: "naibawa" },
    answer: "B"
  },
  {
    number: 2,
    question: "What is 2 + 2?",
    options: { A: "3", B: "5", C: "4", D: "22" },
    answer: "C"
  },
  {
    number: 3,
    question: "Who is the head of acaedemics in semicolon?",
    options: { A: "chibuzo", B: "james", C: "Kim", D: "hauwa" },
    answer: "A"
  },
  {
    number: 4,
    question: "What is the largest planet?",
    options: { A: "Earth", B: "Mars", C: "Saturn", D: "Jupiter" },
    answer: "D"
  },
  {
    number: 5,
    question: "What color is the sky on a clear day?",
    options: { A: "Blue", B: "Green", C: "Red", D: "Yellow" },
    answer: "A"
  },
  {
    number: 6,
    question: "how hard is java?",
    options: { A: "hard", B: "E hard!", C: "simple", D: "so simple" },
    answer: "B"
  },
  {
    number: 7,
    question: "who is the president of burkina faso?",
    options: { A: "Tobi", B: "John", C: "Traore", D: "james Traore" },
    answer: "C"
  },
  {
    number: 8,
    question: "How many continents are there?",
    options: { A: "5", B: "6", C: "7", D: "8" },
    answer: "C"
  },
  {
    number: 9,
    question: "What is water's chemical formula?",
    options: { A: "CO2", B: "H2O", C: "O2", D: "NaCl" },
    answer: "B"
  },
  {
    number: 10,
    question: "Who invented light bulb?",
    options: { A: "Thomas Chibuzo", B: "Thomas Edinson", C: "tobi", D: "james" },
    answer: "B"
  }
];

function shuffleOptions(options) {
  let keys = Object.keys(options);
  let shuffled = [];
  while (keys.length > 0) {
    let index = Math.floor(Math.random() * keys.length);
    key = keys.splice(index, 1)[0];
    shuffled.push({ key: key, value: options[key] });
  }
  return shuffled;
}

function askQuestion(questionObj) {
  let shuffledOptions = shuffleOptions(questionObj.options);
  console.log("\n" + questionObj.question);
  for (let i = 0; i < shuffledOptions.length; i++) {
    console.log(shuffledOptions[i].key + ": " + shuffledOptions[i].value);
  }

  for (let trial = 1; trial <= 2; trial++) {
    let answer = prompt("Your answer (A-D) - Attempt " + trial + ": ").toUpperCase();
    if (answer === questionObj.answer) {
      console.log(" Correct!");
      return true;
    } else {
      console.log(" Wrong!");
    }
  }
  console.log("Correct Answer: " + questionObj.answer + " - " + questionObj.options[questionObj.answer]);
  return false;
}

function playQuiz() {
  let answered = [];
  let correct = [];
  let missed = [];

  console.log("\n Welcome to Semicolon Enum Quiz Master!");
  while (answered.length < 10) {
    let available = [];
    for (let i = 1; i <= 10; i++) {
      if (answered.indexOf(i) === -1) {
        available.push(i);
      }
    }

    console.log("\nAvailable question numbers: [" + available.join(", ") + "]");
    let input = prompt("Choose a question number to answer (or 0 to quit): ");
    let num = parseInt(input);

    if (num === 0) {
      break;
    }

    if (isNaN(num) || num < 1 || num > 10) {
      console.log("Invalid question number.");
      continue;
    }

    if (answered.indexOf(num) !== -1) {
      console.log("Question already answered.");
      continue;
    }

    let questionObj = questions[num - 1];
    let result = askQuestion(questionObj);

    if (result) {
      correct.push(num);
    } else {
      missed.push(num);
    }

    answered.push(num);
  }

 
  console.log("\nQuiz Over!");
  console.log("Questions Answered: " + answered.length);
  console.log("Correct Answers: " + correct.length);
  console.log("Missed Questions: " + missed.length);
   if(correct.length > 5){
	console.log("congratulations, you did well");
    }
   if(missed.length > 5){
	console.log("you have to put in more work and try harder");
	}

  if (missed.length > 0) {
    console.log("\nReview Missed Questions:");
    for (let i = 0; i < missed.length; i++) {
      let q = questions[missed[i] - 1];
      console.log("Q" + q.number + ": " + q.question);
      console.log("Correct Answer: " + q.answer + " - " + q.options[q.answer]);
      console.log("---");
    }
  }

  let again = prompt("Do you want to play again? (yes/no): ").toLowerCase();
  if (again === "yes") {
    playQuiz();
  } else {
    console.log("Thank you from semicolon Team");
  }
}

playQuiz();
