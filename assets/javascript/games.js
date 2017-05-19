var wins = 0; loss = 0; correctGuessCount = 0;
var placeholderArray = [];  wordPlaceholder = [];
var lettersGuessed = [];
var word = []; wordPlaceholderString = "";
var userInput = "";
var guessesLeft = 10;

// Array of Star Wars Hangman words created from object.
var flowers = ["the","rose","jasmine","Dahlia","Magnolia","irses","Violet",
"marigold", "poppy","petuna","peony","camilia","cypress","lilac","tulip"];

document.onkeyup = function(event) {
  var keyPress;
  if (typeof event != 'undefined') {
    keyPress = event.keyCode;
    userInput = String.fromCharCode(keyPress).toUpperCase();//changes user input to upper case
    trackLetterGuesses(userInput); // turcks user gusses
    // Build hangman word based on new user input.
    buildWord(userInput);
  }

  // No idea what this does, but seems to be needed.
  else if (e) {
    keyPress = e.which;
  }
  return false;

};
//Create array from randomly selected flower word Array.
function createWord(flowers) {
  word = flowers[Math.floor(Math.random()*flowers.length)];

  //Create placeholder for word in monitor.
  createWordPlaceholder(word);
  return word;
};

//Create placeholder for word on computer.
function createWordPlaceholder(word) {  
  var wordPlaceholder = [];

  // Fill array with underscores.
  for (i = 0; i < word.length; i++) {
    wordPlaceholder.push("_");
  }

  // Convert word placeholder array to string for displaying in UI.
  wordPlaceholderString = wordPlaceholder.join(" ");

  // Display word placeholder in UI.
  document.getElementById('word-placeholder').textContent = wordPlaceholderString;
  return wordPlaceholder;
};

// Keep track of user guesses and if letters once gussed,don,t truck it.
function trackLetterGuesses(userInput) {
  for (i = 0; i < lettersGuessed.length; i++) {
    if (userInput == lettersGuessed[i]) {
      return;
    }
  }

  // Push letter guessed.
  lettersGuessed.push(userInput);
  console.log("LettersGuessed array item: " + lettersGuessed[0]);
  
  // Convert letters guessed array to string to be displayed on monitor.
  var lettersGuessedString = lettersGuessed.join(", ");
  document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

  // Each guess reduces number of guesses left. 
  guessesLeft--;
  document.getElementById('guesses').innerHTML = guessesLeft;
  // Game restarts when no more guesses left.
  if (guessesLeft == 0) {
    restartGame();
  }

  return lettersGuessedString;
};

// Builds hangman word as user guesses letters.
function buildWord(userInput) {

  if (prevPlaceholderArray.length == 0) {
    placeholderArray = createWordPlaceholder(word);
  //this makes letters and underscores to be seen.
} else {
  placeholderArray = prevPlaceholderArray;
}

  // Replace underscore with matching letter.
  for (var i = 0; i < word.length; i++) {
    console.log('Word is ' + word);
    if (userInput == word[i]) {
      placeholderArray[i] = userInput;
    }
  }


  // Convert placeholder array to string for display on a computer.
  placeholder = placeholderArray.join(" ");
  document.getElementById('word-placeholder').innerHTML = placeholder;
  
  // User wins when placeholder matches word.
  if (placeholder.split(",") == word.join(" ")) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    restartGame();
  }
  if (placeholder.split(",") != word.join(" ")) {
    losss++;
    document.getElementById("losses").innerHTML = loss;
    restartGame();
  }

//injecting HTML to our page.

document.getElementById("#word-placeholder").innerHTML = currentWord;
//display correct letters
document.getElementById("#correctGuess").innerHTML = correctGuess;
  // Display Wins value on page
  document.getElementById("#wins").innerHTML = win;

  // Display Loses value on page
  document.getElementById("#losses").innerHTML = lose;

  // Display Guesses Remaining value on page
  document.getElementById("#guesses").innerHTML = guessNumber;

  // Display the Letters Already Guessed on page
  document.getElementByIdr("#letters-guessed").innerHTML = guessedLetters;
};