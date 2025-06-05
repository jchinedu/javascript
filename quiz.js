const prompt = require('prompt-sync')({ sigint: true });

const questions = [
{question: "What is the capital of Kano?",
options: ["ikeja", "lagos", "Kano", "Madrid"],
 answer: 3
},
{question: "Who is the current president of burkina faso?",
options: ["tinubu", "Chibuzo", "Traore", "Tobi"],
answer: 2
},
{question: "Who is the head of acaedemics of semi_colon?",
 options: ["Mr. Chibuzo", "Mr. Francis", "Mr. chief", "MISS kim"],
answer: 0
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "NaCl"],
    answer: 3
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    answer: 2
  },
  {
    question: "What year did World War II end?",
    options: ["1945", "1939", "1918", "1963"],
    answer: 1
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 2
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: 3
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: 3
  }
];

function shuffleArray(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function displayRemaining(remaining) {
  return remaining.length ? remaining.join(", ") : "None";
}

function askQuestion(qIndex) {
  const q = questions[qIndex];

 
  const optionIndexes = shuffleArray([0,1,2,3]);
  const correctOptionPosition = optionIndexes.indexOf(q.answer - 1) + 1;

  console.log(`\nQuestion ${qIndex + 1}: ${q.question}`);
  optionIndexes.forEach((optIdx, i) => {
    console.log(`${i + 1}. ${q.options[optIdx]}`);
  });

  for (let attempt = 1; attempt <= 2; attempt++) {
    let answer = prompt(`Attempt ${attempt}/2 - Your answer (1-4): `);
    let ansNum = parseInt(answer);
    if (isNaN(ansNum) || ansNum < 1 || ansNum > 4) {
      console.log("Please enter a number between 1 and 4.");
      attempt--;
      continue;
    }
    if (ansNum === correctOptionPosition) {
      console.log("Correct!");
      return true;
    } else {
      console.log("Wrong answer.");
    }
  }

  console.log(`No attempts left. Correct answer was: ${q.options[q.answer - 1]}`);
  return false;
}

function quiz() {
  let remainingQuestions = [...Array(10).keys()].map(x => x + 1);
  let answered = [];
  let correct = 0;
  let missed = [];

  console.log("Welcome to the JavaScript Quiz Game!");

  while(remainingQuestions.length > 0) {
    console.log(`\nRemaining questions: [${displayRemaining(remainingQuestions)}]`);
    let input = prompt("Choose a question number from remaining (or 0 to quit): ");
    let qNum = parseInt(input);

    if (isNaN(qNum) || qNum < 0 || qNum > 10) {
      console.log("Invalid number. Try again.");
      continue;
    }
    if (qNum === 0) {
      break;
    }
    if (!remainingQuestions.includes(qNum)) {
      console.log("Question already answered or not available. Pick another.");
      continue;
    }

   
    const correctAnswer = askQuestion(qNum - 1);

    if (correctAnswer) correct++;
    else missed.push(qNum - 1);

    answered.push(qNum);
    
    remainingQuestions = remainingQuestions.filter(x => x !== qNum);
  }

  
  console.log("\nQuiz session finished.");
  console.log(`You answered ${answered.length} question(s).`);
  console.log(`Correct answers: ${correct}`);
  console.log(`Missed questions: ${missed.length}`);

  if (missed.length > 0) {
    console.log("\nMissed questions and correct answers:");
    missed.forEach(idx => {
      console.log(`Q: ${questions[idx].question}`);
      console.log(`Correct answer: ${questions[idx].options[questions[idx].answer - 1]}\n`);
    });
  }
  let again = prompt("Do you want to play again? (y/n): ").toLowerCase();
  if (again === 'y') {
    quiz();
  } else {
    console.log("Thanks for playing!");
  }
}
quiz();
