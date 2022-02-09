//make function called computerPlay//set parameter for computerPlay for return value
function computerPlay() 
{
  let choice = Math.floor(Math.random() * 3);
  
  if (choice == 0) 
  {
    return "Rock";
  } 
  else if (choice == 1) 
  {
    return "Paper";
  } 
  else
  {
    return "Scissor";
  }
}

console.log(computerPlay());


//return value of either rock, paper, scissor

//declare function for single round of Rock Paper Scissors called playRound
//allow functions to take 2 parameters (playerSelection) and (computerSelection)
//return string that declares winner of round "You Lose! Paper beats Rock"
    //player parameter needs to be case insensitive

//declare a function called game().
//call playRound inside 5 times
//report winner/loser at end

//prompt() user for input
