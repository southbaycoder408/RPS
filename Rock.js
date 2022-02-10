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
function playRound(playerSelection, computerSelection) {//declare function for single round of Rock Paper Scissors called playRound and allow functions to take 2 parameters (playerSelection) and (computerSelection)

let userWins = "User Wins!!!"
let userLose = "Computer Wins!!!"
let userChoice = "User Choice: "
let computerChoice = "Computer Choice: "

console.log("User Choice: " + playerSelection);
console.log("Computer Choice: " + computerSelection);

  if (playerSelection == computerSelection) {
    return alert("It's a Tie!!!");
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return alert(userWins);
  } else if (playerSelection == "rock" && computerSelection == "paper"){
    return alert(userLose);
  } else if (playerSelection == "paper" && computerSelection == "scissor"){
    return alert(userLose);
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    return alert(userWins);
  } else if (playerSelection == "scissor" && computerSelection == "rock"){
    return alert(userLose);
  } else if (playerSelection == "scissor" && computerSelection == "paper"){
    return alert(userWins);
  }

}

let playerSelection = prompt("Choose Rock, Paper, or Scissors");
playerSelection = playerSelection.toLowerCase();
let computerSelection = computerPlay();


playRound(playerSelection, computerSelection)

//return string that declares winner of round "You Lose! Paper beats Rock"
//player parameter needs to be case insensitive

//declare a function called game().
//call playRound inside 5 times
//report winner/loser at end

//prompt() user for input