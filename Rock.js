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
  
  console.log("You played " + playerSelection + " while the Computer played " + computerSelection + ".");
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection == computerSelection) {
    console.log("It's a Tie!");
    return;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    console.log("You win!");
    return;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose!");
    return;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    console.log("You lose!");
    return;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win!");
    return;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    console.log("You lose!");
    return;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    console.log("You win!");
    return;
  } else{
    console.log("ruh roh, a boo boo made");
    return;
  }
}

// function game(){
//   let win = "You win!";
//   let lose = "You lose!";
//   let tie = "It's a Tie!";
//   let playerScore = 0;
//   let computerScore =0;
//   let tieScore = 0;

//   for (let i = 0; i < 5; i++) {

//     let playerSelection = prompt("Choose Rock, Paper, or Scissors");
//     playerSelection = playerSelection.toLowerCase(); //player parameter needs to be case insensitive
//     let computerSelection = computerPlay();
//     let score = playRound(playerSelection, computerSelection);

//     if(score == win)
//     {
//       ++playerScore;
//     }
//     else if(score == lose){
//       ++computerScore;
//     }
//     else if(score == tie){
//       ++tieScore;
//     }
//   }
//   console.log("TOTAL SCORE");
//   console.log("Player Points: " + playerScore);
//   console.log("Computer Points: " + computerScore);
//   console.log("Tie Points: " + tieScore);

//   if(playerScore < computerScore){
//     alert("SHAMEFUL");
//   }
//   else if(playerScore > computerScore){
//     alert("VICTORIOUS");
//   }
//   else if(playerScore == computerScore){
//     alert("Meh...");
//   }

// }

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
playRound("Rock",computerPlay());  
});
btn2.addEventListener('click', () => {
playRound("Paper",computerPlay());  
});
btn3.addEventListener('click', () => {
playRound("Scissor",computerPlay());  
});