var wins = 0;//inital win starts with zero
var losses = 0;// intital won starts with zero
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];// holds words both for the computer and the user
var lettersGuessed = [];
var word = [];// the array that will be created from array flowers
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 10;

var flowers = ["the","rose","jasmine","Dahlia","Magnolia","irses","Violet",
"marigold", "poppy","petuna","peony","camilia","cypress","lilac","tulip"];


// lets create an array randomly chosen words for the user to guess
var randomWord = Math.floor(Math.random()*flowers.length);

	word = flowers[randomWord];
			// remove the chosen word from array
			flowers.splice(randomWord, 1);
// generate a place holder for the computer to guess.
placeholder = word.split("");
for (var i = 0; i < placeholder.length; i++) {
	placeholder[i] = " _";
	console.log (placeholder[i]);
};
// this Display word placeholder on  monitor.
	document.getElementById("word-placeholder").textContent = wordPlaceholderString;
//Creates array with the letters of the choosen word 
  splitWord = pickedWord.split("");
//Counts the number of total letters in the randommly chosen word
  totalLetters = splitWord.length;

  // When the user presses a key, the following function will run .

document.onkeyup = function(event) {

initializeGame();
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
};


// Get the "_" to change back to the letter guessed
for (var i = 0; i < splitWord.length; i++) {
	if (splitWord[i] == userGuess) {
		placeholder[i]=placeholder[i].replace(' _', userGuess);
		console.log(placeholder[i]);
	}
};


// the following function will check if the user won or loss.
correctLetters = 0;
for (var i = 0; i < splitWord.length; i++) {
	if ((splitWord[i] == placeholder[i])){
		correctLetters++;
		if ((totalLetters == correctLetters) && (guessNumber > 0)) {
			win++;
			document.getElementById("win-count").innerHTML = wins;
		}


	} else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
		lose++;
		document.getElementById("loss").innerHTML = losses;
	};
}
// Restart game, initializing several values.
function restartGame(wordPlaceholder) {
	
	// Add new word.
	createWord(flowers);

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

