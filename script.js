let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*9);
}; 

//1:Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.
  //1.1:Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
  //1.2:Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
  //1.3Return true if the human player wins, and false if the computer player wins.
const compareGuesses = (human, computer, target) => {
  let generateTarget = target;
  // console.log(target);
  let humanGuesses = Math.abs(target - human);
  let computerGuesses = Math.abs(target - computer);
  // console.log(humanGuesses);
  // console.log(computerGuesses);
  return humanGuesses <= computerGuesses ? true: false;
};
// console.log(compareGuesses(8,4,generateTarget()));

//2:Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.
  //2.1:Has a single parameter. This parameter will be a string value representing the winner.
  //2.2:Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
  //2.3:Does not need to return any value.
const updateScore = (winner) => {
  if (winner === 'human'){
    return (humanScore++);
  }else if (winner === 'computer'){
    return (computerScore++);
  }else {
    return 'Score Error!!!'
  }
};

//3:Create an advanceRound() function. This function will be used to update the round number after each round. AdvanceRound() should increase the value of currentRoundNumber by 1. Than go to the game.js.
const advanceRound = () => {
  return currentRoundNumber++;
}
