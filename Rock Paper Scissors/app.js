let userChoiceEl = document.getElementById("user-choice");
let computerChoice = document.getElementById("computer-choice");
let result = document.getElementById("result");
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");

const NOWINNER = "No winner";
const YOUWINNER = "You are winner";
const COMPUTERWINNER = "Computer won";

function getRandom() {
  let random = Math.floor(Math.random() * 3) + 1;
  let result;
  switch (random) {
    case 1:
      result = "Rock";
      break;
    case 2:
      result = "Paper";
      break;
    case 3:
      result = "Scissors";
  }
  return result;
}

function getResult(compChoice, userChoice) {
  let result;
  switch (compChoice) {
    case "Rock":
      if (userChoice == "Rock") {
        result = NOWINNER;
      } else if (userChoice === "Paper") {
        result = YOUWINNER;
      } else {
        result = COMPUTERWINNER;
      }
      break;
    case "Paper":
      if (userChoice == "Rock") {
        result = COMPUTERWINNER;
      } else if (userChoice === "Paper") {
        result = NOWINNER;
      } else {
        result = YOUWINNER;
      }
      break;
    case "Scissors":
      if (userChoice == "Rock") {
        result = YOUWINNER;
      } else if (userChoice === "Scissors") {
        result = NOWINNER;
      } else {
        result = COMPUTERWINNER;
      }
      break;
  }
  return result;
}

function choice(userChoice) {
  userChoiceEl.textContent = userChoice;
  let compChoice = getRandom();
  computerChoice.textContent = compChoice;
  result.textContent = getResult(compChoice, userChoice);
}

buttonRock.addEventListener("click", () => {
  let userChoice = "Rock";
  choice(userChoice);
});
buttonPaper.addEventListener("click", () => {
  let userChoice = "Paper";
  choice(userChoice);
});
buttonScissors.addEventListener("click", () => {
  let userChoice = "Scissors";
  choice(userChoice);
});
