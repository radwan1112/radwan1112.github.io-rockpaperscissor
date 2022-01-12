// Generate a Random number between 0 and 2
function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

// Computer Turn Random Select one of Three
function computerPlay() {
  let rockPaperScissor = ["rock", "paper", "scissor"];
  let pcChoice = rockPaperScissor[randomNumber()];

  if (pcChoice === "rock") {
    pcChoiceImg.src = "images/rock-icon.png";
  } else if (pcChoice === "paper") {
    pcChoiceImg.src = "images/paper-icon.png";
  } else if (pcChoice === "scissor") {
    pcChoiceImg.src = "images/scissor-icon.png";
  } else {
    console.log("There was an Error Pc Choice");
  }

  return pcChoice;
}

function capitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Return Round Results
function roundResult(playerSelection, computerSelection) {
  let tieGame = "tiegame";
  let playerWin = "playerwin";
  let computerWin = "computerwin";

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return tieGame;
      case "paper":
        return computerWin;
      case "scissor":
        return playerWin;
      default:
        return false;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return playerWin;
      case "paper":
        return tieGame;
      case "scissor":
        return computerWin;
      default:
        return false;
    }
  } else if (playerSelection === "scissor") {
    switch (computerSelection) {
      case "rock":
        return computerWin;
      case "paper":
        return playerWin;
      case "scissor":
        return tieGame;
      default:
        return false;
    }
  } else {
    return false;
  }
}

//Return Match Reults
function matchTracker(humanScore, computerScore) {
  if (humanScore >= 5 && humanScore > computerScore) {
    gameResult.textContent = "You Won!!!";
    endgame.classList.add("active");
  } else if (computerScore >= 5 && computerScore > humanScore) {
    gameResult.textContent = "You Lost!!!";
    endgame.classList.add("active");
  } else {
    return true;
  }
}

function restartMatch() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = `${playerScore}`;
  pcScoreSpan.textContent = `${computerScore}`;
  playerChoiceImg.src = "images/question-mark.png";
  pcChoiceImg.src = "images/question-mark.png";
  resultPara.textContent = "Choose Rock Paper or Scissor";
  explainPara.textContent = "First to 5 points Wins the Game!!!";
}

function matchStart(playerChoice) {
  let match;

  playerChoiceImg.src = `images/${playerChoice}-icon.png`;
  pcChoice = computerPlay();
  let result = roundResult(playerChoice, pcChoice);
  playerChoice = capitalFirstLetter(playerChoice);
  pcChoice = capitalFirstLetter(pcChoice);

  if (result == "tiegame") {
    playerScore++;
    computerScore++;
    playerScoreSpan.textContent = `${playerScore}`;
    pcScoreSpan.textContent = `${computerScore}`;
    resultPara.textContent = `Tie Game`;
    explainPara.textContent = `${playerChoice} against ${pcChoice}`;
  } else if (result == "playerwin") {
    playerScore++;
    playerScoreSpan.textContent = `${playerScore}`;
    resultPara.textContent = `You Won!`;
    explainPara.textContent = `${playerChoice} against ${pcChoice}`;
  } else if (result == "computerwin") {
    computerScore++;
    pcScoreSpan.textContent = `${computerScore}`;
    resultPara.textContent = `Computer Won!`;
    explainPara.textContent = `${playerChoice} against ${pcChoice}`;
  } else if (result === false) {
    console.log("Their was an unknown Error!");
  } else {
    console.log("Their was an unknown Error!");
  }

  matchTracker(playerScore, computerScore);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let playerChoiceImg = document.querySelector("#player_choice");
let pcChoiceImg = document.querySelector("#pc_choice");
let resultPara = document.querySelector("#result");
let explainPara = document.querySelector("#explain");
let playerScoreSpan = document.querySelector("#player_score");
let pcScoreSpan = document.querySelector("#pc_score");
let pcChoice, playerChoice;
let playerScore = 0;
let computerScore = 0;
let gameResult = document.querySelector(".game-result");
let endgame = document.querySelector(".endgame");
let playAgain = document.querySelector("button.btn");

// Player Selection
rock.addEventListener("click", () => {
  matchStart("rock");
});

paper.addEventListener("click", () => {
  matchStart("paper");
});

scissor.addEventListener("click", () => {
  matchStart("scissor");
});

playAgain.addEventListener("click", () => {
  restartMatch();
  endgame.classList.remove("active");
});
