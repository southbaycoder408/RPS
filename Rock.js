const container = document.querySelector('#container');
const result = document.createElement('p');
const score = document.createElement('p');
const matchResults = document.createElement('p')
const buttons = document.querySelectorAll('button');

result.classList.add('roundOutcome');
score.classList.add('scoreCount');
matchResults.classList.add('matchResults');

// container.appendChild(score);
// container.appendChild(result);

let roundResult;
let scoreTrack;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

buttons.forEach((button => { //this creates an evenlistener button for each choice for rock paper scissors
  button.addEventListener('click', () => {
    roundResult = playRound(button.id, computerPlay());
    scoreTrack = checkWinCondition();
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
    const outcome = "tie";
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". Oh...it's a tie.";
    container.appendChild(result);
    return outcome;
  } else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
    const outcome = "win";
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". You won this one!!";
    container.appendChild(result);
    return outcome;
  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")) {
    const outcome = "lose";
    result.textContent = "You played " + playerSelection + " while the Computer played " + computerSelection + ". Darn you lost this round!";
    container.appendChild(result);
    return outcome;
  } else {
    alert("ruh roh, I made a boo boo");
    return;
  }
}

function checkWinCondition() {
  if(playerScore !== 5 && computerScore !== 5){
    if (roundResult == "win") {
      playerScore++;
      score.textContent = "Player Score : " + playerScore + ", Computer Score : " + computerScore + ", and Ties: " + tieScore;
      container.appendChild(score);
    } else if (roundResult == "lose") {
      computerScore++;
      score.textContent = "Player Score : " + playerScore + ", Computer Score : " + computerScore + ", and Ties: " + tieScore; 
      container.appendChild(score);
    } else if (roundResult == "tie") {
      tieScore++;
      score.textContent = "Player Score : " + playerScore + ", Computer Score : " + computerScore + ", and Ties: " + tieScore;
      container.appendChild(score);
    } else if (typeof roundResult != 'string') {
      alert("woops a boo boo");
    }
  }

  if(playerScore === 5){
    matchResults.textContent = "VICTORY!!";
    container.appendChild(matchResults);
  }
  else if(computerScore === 5){
    matchResults.textContent = "DEFEAT!!"
    container.appendChild(matchResults);
  }
  else;
  
}