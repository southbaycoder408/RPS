function computerPlay() //make function called computerPlay and set parameter for computerPlay for return value
{
  let choice = Math.floor(Math.random() * 3); //return value of either rock, paper, scissor

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) { //declare function for single round of Rock Paper Scissors called playRound and allow functions to take 2 parameters (playerSelection) and (computerSelection)

  let userWins = "You win!"; //return string that declares winner of round "You Lose! Paper beats Rock"
  let userLose = "You lose!"; //return string that declares winner of round "You Lose! Paper beats Rock"
  let tie = "It's a Tie!";
  let userChoice = "User: ";
  let computerChoice = "Computer: "

  console.log("You: " + playerSelection);
  console.log("Computer: " + computerSelection);

  if (playerSelection == computerSelection) {
    return tie;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return userWins;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return userLose;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return userLose;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return userWins;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return userLose;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return userWins;
  }
}

function game(){
  let win = "You win!";
  let lose = "You lose!";
  let tie = "It's a Tie!";
  let playerScore = 0;
  let computerScore =0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase(); //player parameter needs to be case insensitive
    let computerSelection = computerPlay();
    let score = playRound(playerSelection, computerSelection);

    if(score == win)
    {
      ++playerScore;
    }
    else if(score == lose){
      ++computerScore;
    }
    else if(score == tie){
      ++tieScore;
    }
  }

  console.log("Player Points: " + playerScore);
  console.log("Computer Points: " + computerScore);
  console.log("Tie Points: " + tieScore);

  if(playerScore < computerScore){
    alert("Defeat");
  }
  else if(playerScore > computerScore){
    alert("Victory");
  }
  else if(playerScore == computerScore){
    alert("Tied");
  }

}



//return string that declares winner of round "You Lose! Paper beats Rock"

//declare a function called game().
//call playRound inside 5 times
//report winner/loser at end

//prompt() user for input