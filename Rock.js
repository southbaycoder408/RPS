function computerPlay() //make function called computerPlay//set parameter for computerPlay for return value
{
  let choice = Math.floor(Math.random() * 3); //return value of either rock, paper, scissor

  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

//declare function for single round of Rock Paper Scissors called playRound
function playRound(playerSelection, computerSelection) {//allow functions to take 2 parameters (playerSelection) and (computerSelection)

let userWins = "User Wins!!!"
let userLose = "Computer Wins!!!"
let userChoice = "User Choice: "
let computerChoice = "Computer Choice: "
console.log("User Choice: " + playerSelection);
console.log("Computer Choice: " + computerSelection);


  if (playerSelection == computerSelection) {
    return alert("It's a Tie!!!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    return alert(userWins);
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return alert(userLose);
  } else if (playerSelection == "Paper" && computerSelection == "Scissor"){
    return alert(userLose);
  } else if (playerSelection == "Paper" && computerSelection == "Rock"){
    return alert(userWins);
  } else if (playerSelection == "Scissor" && computerSelection == "Rock"){
    return alert(userLose);
  } else if (playerSelection == "Scissor" && computerSelection == "Paper"){
    return alert(userWins);
  }

}

let playerSelection = prompt("Choose Rock, Paper, or Scissors");
let computerSelection = computerPlay();

playRound(playerSelection, computerSelection)



//return string that declares winner of round "You Lose! Paper beats Rock"
//player parameter needs to be case insensitive

//declare a function called game().
//call playRound inside 5 times
//report winner/loser at end

//prompt() user for input