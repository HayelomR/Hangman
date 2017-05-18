/* words that will be used for the game.*/

var cars =  [ "Bugatti","lumborghini","Tesla"
"Audi", "Jaguar","lexus","Mercedes", "Cadillaic",
"Bmw","Acura","Maserati", "land rover","Jeep"," acura"
,"kia"];

var wins = 0;
var loses = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 13;

// Object of Star Wars Hangman words.

// Array of Star Wars Hangman words created from object.


// Initialize game on window load.
function initializeGame() {

for (var i = 0; i < cars.length; i++) {
		var index = Math.floor(Math.random()*theWord.length);
		pickedWord = cars[index];
		theWord.splice(index, 1);  // This removes the picked element from the array

//Generate placeholder text for the word the computer chooses
	function createWordPlaceholder(word) {	
	var wordPlaceholder = [];

	// Fill array with underscores.
	for (i = 0; i < cars.length; i++) {
		wordPlaceholder.push("_");
	}
	wordPlaceholderString = wordPlaceholder.join(" ");

	// Display word placeholder in computer.
	document.getElementById('word-placeholder').textContent = wordPlaceholderString;
	return wordPlaceholder;
};



//Creates array with the letters of the choosen word
	function trackLetterGuesses(userInput) {

	/* 
	 * Check if letter already guessed.
	 * Don't track letters more than once.
	 */
	for (i = 0; i < lettersGuessed.length; i++) {
		if (userInput == lettersGuessed[i]) {
			return;
		}
	}
	

initializeGame();

// Check if user input is only alphabet keys
function lettersOnly() {
	var charCode = event.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
		return true;
	} else {
		return false;
	}
}

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// Determine which key was pressed
var userGuess = event.key;

// Check if the letter has already been used
function prevGuess () {
	if (alreadyGuessed.includes(userGuess)) { 
		return true;
	}
	else { 
		return false;
	}
}

if (lettersOnly() == true) {
	console.log("You pressed alphabet key")
	}
	else {
	console.log("Please press a letter key only")
	}

// Comparing the user's guess to the letters contained in splitWord array (the picked word)
	for (var i = 0; i < splitWord.length; i++) {
		if ((prevGuess()) ==false && (lettersOnly()==true)){

			if ((userGuess == splitWord[i])) {
			// console.log ("You guessed " + userGuess);
			guessNumber--;
			alreadyGuessed.push(userGuess);
		}
	

		else if ((userGuess !== splitWord[i])) {
			// console.log("Wrong guess.")
			guessNumber--;
			alreadyGuessed.push(userGuess);
		}

		else if ((prevGuess() == true) || (lettersOnly()==false)) { 
			console.log("Keep guessing");
		}

		else {
			// return false;
			console.log("not sure what to do")
			}	
	}
};

// Get the "_" to change back to the letter guessed
		for (var i = 0; i < splitWord.length; i++) {
			if (splitWord[i] == userGuess) {
				placeholder[i]=placeholder[i].replace(' _', userGuess);
				console.log(placeholder[i]);
			}
		}

// Check if user won
correctLetters = 0;
for (var i = 0; i < splitWord.length; i++) {
			
			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				console.log("Congratulations!")
				win++;
				initializeGame();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber == 0)) {
			console.log("You lose")
			lose++;
			initializeGame();
		}
};
function restartGame(wordPlaceholder) {
	
	// Add new word.
	createWord(wordArray);

	//Empty user input and placeholder values.
    userInput = "";
	prevPlaceholderArray = [];
	placeholderArray = [];

	// Reset remaining guesses.
	guessesLeft = 13;

	// Reset guess count.
	correctGuessCount = 0;
	document.getElementById('guessRemain').innerHTML = guessesLeft;

	// Reset list of letters guessed.
	lettersGuessed = [];
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
};

// Create the HTML that will be injected into <span> and displayed on the page.

  // Display the word placeholder on our page.
	    var currentWord = "<p>" + placeholder + "</p>";
	    document.querySelector("#word-placeholder").innerHTML = currentWord;

  // Display Wins value on page
	    var winner = win;
		document.querySelector("#wins-count").innerHTML = winner;

  // Display Loses value on page
	    var loss = lose;
		document.querySelector("#losses-count").innerHTML = loss;

  // Display Guesses Remaining value on page
	    var guess = guessNumber;
		document.querySelector("#guessRemain").innerHTML = guess;

  // Display the Letters Already Guessed on page
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#lettersGuessed").innerHTML = guessedLetters;

}; //<--ending keyup function curly brace


