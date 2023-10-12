// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Variables to keep track of previous guess and response message
let previousGuess = null;
let response = document.getElementById("response");

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  // Check if the guess is correct
  if (guess === secretNumber) {
    response.innerHTML = "Congratulations! You guessed the correct number!";
  } else {
    // Calculate the difference between the current guess and the secret number
    const currentDifference = Math.abs(secretNumber - guess);

    if (previousGuess === null) {
      // Initial guess
      previousGuess = currentDifference;
      response.innerHTML = guess > secretNumber ? "Guess lower" : "Guess higher";
    } else {
      // Compare the current difference with the previous one
      if (currentDifference < previousGuess) {
        response.innerHTML = "Getting hotter";
        response.innerHTML += guess > secretNumber ? " and guess lower" : " and guess higher";
      } else {
        response.innerHTML = "Getting colder";
        response.innerHTML += guess > secretNumber ? " and guess lower" : " and guess higher";
      }
      previousGuess = currentDifference;
    }
  }

  guessInput.value = ""; // Clear the input field
}


