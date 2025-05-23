let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 0;
let maxTries = 10;

const guessButton = document.querySelector(".btnGuess");
const newGameButton = document.querySelector(".btnNewGame");
const inputField = document.querySelector(".inputs-Values");
const finalOutput = document.querySelector(".final-output");
const triesOutput = document.querySelector(".Tries-output");

function guessNumber() {
  //Collect input from the user
  const guess = Number(inputField.value);

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (!guess || guess < 1 || guess > 100) {
    finalOutput.textContent = "Please enter a number between 1 and 100";
    return;
  }
  tries++;

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (guess > randomNumber) {
    finalOutput.textContent = "Number is too high, try again";
  } else if (guess < randomNumber) {
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    finalOutput.textContent = "Number is too low, try again";
  } else {
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    finalOutput.textContent = "Guess is correct. You win!";
    guessButton.disabled = true;
    guess.disabled = true;
  }
  triesOutput.textContent = `Tries ${tries}/${maxTries}`;
  if (tries >= maxTries && guess !== randomNumber) {
    finalOutput.textContent = `You lose, the number was ${randomNumber}`;
    guessButton.disabled = true;
    guess.disabled = true;
  }
  inputField.value = "";
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = Math.floor(Math.random() * 100 + 1);
  tries = 0;
  inputField.value = "";
  finalOutput.textContent = "Guess a number between 1 and 100";
  triesOutput.textContent = "";
  guessButton.disabled = false;
  guess.disabled = false;
}

guessButton.addEventListener("click", guessNumber);
newGameButton.addEventListener("click", newGame);
