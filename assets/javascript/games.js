var wins = 0; lose = 0;
var placeholderArray = []; prevPlaceholderArray = []; wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 13;

// Array of Star Wars Hangman words created from object.
var flowers = ["the","rose","jasmine","Dahlia","Magnolia","irses","Violet",
"marigold", "poppy","petuna","peony","camilia","cypress","lilac","tulip"];

createWord(flowers);
document.onkeyup = function(event) {
  var keyPress;

  if (typeof event != 'undefined') {
    keyPress = event.keyCode;

    // Convert user input key to upper case string.
    userInput = String.fromCharCode(keyPress).toUpperCase();
    console.log(userInput + " should match the key entered");

    // Track user guesses over time.
    trackLetterGuesses(userInput);


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
  document.getElementById('guess-count').innerHTML = guessesLeft;
  console.log('Guesses left' + guessesLeft);


  // Game restarts when no more guesses left.
  if (guessesLeft == 0) {
    restartGame();
  }

  return lettersGuessedString;
};

// Builds hangman word as user guesses letters.
function buildWord(userInput) {

  // Initialize placeholder array to underscore placeholder.
  if (prevPlaceholderArray.length == 0) {
    placeholderArray = createWordPlaceholder(word);

  // Makes it possible to see letters and underscores.
  } else {
    placeholderArray = prevPlaceholderArray;
  }

  // Replace underscore with matching letter.
  for (var i = 0; i < word.length; i++) {
    console.log('Word is ' + word);
    if (userInput == word[i]) {
      console.log(userInput + " is in word at " + i);
      //
      placeholderArray[i] = userInput;
    }
  }

  prevPlaceholderArray = placeholderArray;

  // Convert placeholder array to string for display in UI.
  placeholder = placeholderArray.join(" ");
  document.getElementById('word-placeholder').innerHTML = placeholder;
  
  // User wins when placeholder matches word.
  if (placeholder.split(',') == word.join(" ")) {
    wins++;
    document.getElementById('win-count').innerHTML = wins;
    restartGame();
  }
};
