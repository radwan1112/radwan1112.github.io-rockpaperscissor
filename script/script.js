// Computer Turn Random Select one of Three
function computerPlay() {
  let rockPaperScissor = ["rock", "paper", "scissor"];
  return rockPaperScissor[randomNumber()];
}

// Generate a Random number between 0 and 2
function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

// Return Round Results
function roundResult(playerSelection, computerSelection) {
  let tieGame = "tie";
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
        return fales;
    }
  } else {
    return false;
  }
}

//Return Match Reults

function matchResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Player won the match";
  } else if (computerScore > playerScore) {
    return "Computer Won the match";
  } else if (playerScore == computerScore) {
    return "Its a tie game";
  } else {
    return "Unknown Error";
  }
}

//Start a new Game
function game() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  for (; playerScore < 5 && computerScore < 5; ) {
    round++;
    const playerSelection = prompt(
      `Round ${round} Choose "Rock", "Paper", "Scissor": `
    );
    let playerSelectionDisplay =
      playerSelection[0].toUpperCase() + playerSelection.substring(1);
    console.log(`You have selected: ${playerSelectionDisplay}`);
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    let computerSelectionDisplay =
      computerSelection[0].toUpperCase() + computerSelection.substring(1);
    console.log(`Computer have selected: ${computerSelectionDisplay}`);

    let result = roundResult(playerSelectionLowerCase, computerSelection);

    if (result == "tie") {
      playerScore++;
      computerScore++;
      console.log(
        `Tie Game Player: ${playerScore} | Computer: ${computerScore}`
      );
    } else if (result == "playerwin") {
      playerScore++;
      console.log(
        `Player Won this Round Player: ${playerScore} | Computer: ${computerScore}`
      );
    } else if (result == "computerwin") {
      computerScore++;
      console.log(
        `Computer Won this Round Player: ${playerScore} | Computer: ${computerScore}`
      );
    } else if (result === false) {
      console.log(
        "Their was an Input Error Please Enter Rock, Paper or Scissors"
      );
      i--;
    } else {
      console.log("Their was an unknown Error!");
      i--;
    }
  }
  console.log(matchResult(playerScore, computerScore));
}

game();
