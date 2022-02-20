const container = document.querySelector('#container');
const result = document.createElement('p');
const score = document.createElement('p');
result.classList.add('outcome');
score.classList.add('scoreCount');
container.appendChild(score);
container.appendChild(result);

const buttons = document.querySelectorAll('button');

buttons.forEach((button => { 
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());
  })
}));

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

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". Oh...it's a tie.";
    container.appendChild(result);
    return;
  } else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". You won this one!!";
    container.appendChild(result);
    return;
  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")) {
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". Darn you lost this round!";
    container.appendChild(result);
    return;
  } else {
    alert("ruh roh, I made a boo boo");
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