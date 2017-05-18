var wins = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];// holds words both for the computer and the user
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 10;

var wordArray =  [ "the","rose","jasmine","Dahlia","Magnolia","irses","Violet",
"marigold", "poppy","petuna","peony","camilia","cypress","lilac","tulip"];


// lets create an array randomly chosen words for the user to guess

for (var i = 0; i < wordArray.length; i++) {
	word = wordArray[Math.floor(Math.random()*wordArray.length)];
	userInput = wordArray[index];
			// remove the chosen word from array
			wordsArray.splice(index, 1);
		};

// generate a place holder for the computer to guess.
placeholder = pickedWord.split("");
for (var i = 0; i < placeholder.length; i++) {
	placeholder[i] = " _";
	console.log (placeholder[i]);
};
	// Display word placeholder on  monitor.
	document.getElementById('word-placeholder').textContent = wordPlaceholderString;

// Keep track of user guesses.
function trackLetterGuesses(userInput) {
	for (i = 0; i < lettersGuessed.length; i++) {
		if (userInput == lettersGuessed[i]) {
			return;
		}
	}

	// Push letter guessed.
	lettersGuessed.push(userInput);
	
	// Convert letters guessed array to string for displaying in UI.
	var lettersGuessedString = lettersGuessed.join(", ");
	document.getElementById("letters-guessed").innerHTML = lettersGuessedString;

	// Each guess reduces number of guesses left. 
	guessesLeft--;

	// Display guesses left on monitor.
	document.getElementById("guess-count").innerHTML = guessesLeft;
	// Game restarts when no more guesses left.
	if (guessesLeft == 0) {
		restartGame();
	}

	return lettersGuessedString;
};

initializeGame();

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// Comparing the user's guess to the letters contained in splitWord array (the picked word)
for (var i = 0; i < splitWord.length; i++) {

	if ((prevGuess()) ==false && (lettersOnly()==true)){

		if ((userGuess == splitWord[i])) {
			alreadyGuessed.push(userGuess);
		}
		else if ((userGuess == splitWord[i]) && (prevGuess()==true) && (lettersOnly()==true)) {
			console.log("keep gusseing");
		}


		else if ((userGuess != splitWord[i])) {
			guessNumber--;
			letters-guessed.push(userGuess);
		}

		else if ((prevGuess() == true) || (lettersOnly()==false)) { 
			console.log("Keep guessing");
		}

}


// Get the "_" to change back to the letter guessed
for (var i = 0; i < splitWord.length; i++) {
	if (splitWord[i] == userGuess) {
		placeholder[i]=placeholder[i].replace(' _', userGuess);
		console.log(placeholder[i]);
	}
};


// Check if user won or loss
correctLetters = 0;


for (var i = 0; i < splitWord.length; i++) {


	if ((splitWord[i] == placeholder[i])){
		correctLetters++;
		document.getElementById('win-count').innerHTML = wins;

		if ((totalLetters == correctLetters) && (guessNumber > 0)) {

			win++;
			document.getElementById("win-count").innerHTML = wins;
		}

	} else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
		lose++;
		document.getElementById("loss").innerHTML = wins;

	};

// Restart game, initializing several values.
function restartGame(wordPlaceholder) {
	
	// Add new word.
	createWord(wordArray);

	//Empty user input and placeholder values.
	userInput = "";
	prevPlaceholderArray = [];
	placeholderArray = [];

	// Reset remaining guesses.
	guessesLeft = 10;

	// Reset guess count.
	correctGuessCount = 0;
	document.getElementById('guess-count').innerHTML = guessesLeft;

	// Reset list of letters guessed.
	lettersGuessed = [];
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
};

};
