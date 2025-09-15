const Questions = [
  {
    question: "Who is the best footballer ?",
    options: ["Messi", "Ronaldo", "Obinna", "Otti"],
    correct: 0,
  },
  {
    question: "What is 1+1 ?",
    options: ["1", "10", "2", "12"],
    correct: 2,
  },
  {
    question: "Who is the President of Nigeria ?",
    options: ["Atiku", "Tinubu", "Obi", "Ernest"],
    correct: 1,
  },
  {
    question: "Who is the  Governor of Abia?",
    options: ["Fola", "Ronaldo", "Obinna", "Otti"],
    correct: 3,
  },
];
const displayQuestion = document.querySelector("#displayQuestion");
let Score = document.querySelector("#score");
const Button = document.querySelectorAll("button");
// querySelectorAll returns the element as an array
const Main = document.querySelector("main");

let currentQuestion = 0;
Score.textContent = 0;

function Display() {
  // This shows the questions and their options
  displayQuestion.textContent = Questions[currentQuestion].question;
  Questions[currentQuestion].options.forEach((option, index) => {
    Button[index].textContent = option;
  });
}
Display();
function CheckforAnswer(value, eachButton) {
  if (value === Questions[currentQuestion].correct) {
    eachButton.style.backgroundColor = "green";
    Score.textContent++;
  } else {
    eachButton.style.backgroundColor = "red";
  }
  setTimeout(() => {
    // Handle nexting of questions
    currentQuestion++;

    // condition to ensure questions displayed do not exceed our list
    if (currentQuestion < Questions.length) {
      Display();
      eachButton.style.backgroundColor = "";
    } else {
      Main.textContent = `GAME OVER, your score is ${Score.textContent}`;
      Main.classList.add("lastpage");
    }
  }, 2000);
}
