let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*9);
}; 

// console.log(generateTarget());

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

const updateScore = (winner) => {
  if (winner === 'human'){
    return (humanScore++);
  }else if (winner === 'computer'){
    return (computerScore++);
  }else {
    return 'Score Error!!!'
  }
};

const advanceRound = () => {
  return currentRoundNumber++;
}
