function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function Playround(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "it's a Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "papper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "papper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt("Round " + i + ": Choose rock, paper, or scissors");
      const computerSelection = getComputerChoice();
      const result = Playround(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log("Final score:");
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game :(");
    } else {
      console.log("It's a tie!")
    }
  }
  
  game();