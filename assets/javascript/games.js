
var win = 0;// counts letters for win
var lose = 0;// counts letters for win
var chosenWord; // a word chosen for the user to guess
var placeholder; // a place for the word the computer choose
var gussWord; //compares letter that user is guessing
var totalLetters; 
var guessNumber; // how many times the player gussed
var userGuess;// number of times where the use guses
var alreadyGuessed = [];//letters that are already gusssed
var correctLetters = 0;//

var flowers = ["rose","jasmine","dahlia","magnolia","irses","violet",
"marigold", "poppy","petuna","peony","camilia","cypress","lilac","tulip"];
//create function initialize
function initializeGame() {
  guessNumber = 10;
  alreadyGuessed = [];
  correctLetters = 0;
 //create random word for the user to guess
 chosenWord = flowers[Math.floor(Math.random()*flowers.length)];
    flowers.splice(chosenWord, 0);  // removes the chosen element from the array
//placeholder for the word the computer chooses
placeholder = chosenWord.split("");
for (var i = 0; i < placeholder.length; i++) {
  placeholder[i] = " _";
};  
//Creates array with the letters of the choosen word 
gussWord = chosenWord.split("");
//console.log("The answer is " + gussWord;
totalLetters = gussWord.length;  

}; // this ends the function

// this helps the user the user to see if they use on alpahabets
function lettersOnly() {
  var charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91)) {
    return true;
  } else {
    return false;
  }
};

function prevGuess () {
  var userGuess = event.key;
  if (alreadyGuessed.includes(userGuess)) { 
    return true;
  }
  else { 
    return false;
  }
};

initializeGame();

// When the user presses a key, it will run the following functions...
document.onkeyup = function(event) {
  userGuess = event.key
// Comparing the user's guess to the letters contained in splitWord array (the picked word)
if ((prevGuess()===false) && (lettersOnly())) {

  if (gussWord.includes(userGuess)) {
      alreadyGuessed.push(userGuess);
    }

    else if (gussWord != userGuess) {
      // console.log("Wrong guess.");
      guessNumber--;
      alreadyGuessed.push(userGuess);
    }
  };

// Get the "_" to change back to the letter guessed
for (var i = 0; i < gussWord.length; i++) {
  if (gussWord[i] == userGuess) {
    placeholder[i]=placeholder[i].replace(' _', userGuess);
  }
};

// Check if user won or loss
correctLetters = 0;
for (var i = 0; i < gussWord.length; i++) {

  if ((gussWord[i] == placeholder[i])){
    correctLetters++;

    if ((totalLetters == correctLetters) && (guessNumber > 0)) {
      console.log("Congratulations!")
      win++;
      initializeGame();
    }

  } else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
    console.log("You lose.")
    lose++;
    initializeGame();
  }
};

// connecting the html page with our javascript
currentWord = "<p>" + placeholder.join('') + "</p>";//this is  word placeholder for our page.

// connecting the html page with our javascript
document.getElementById("word-placeholder").innerHTML = currentWord;

  // Display Wins value on page
  document.getElementById("won").innerHTML = win;

  // Display Loses value on page
  document.getElementById("los").innerHTML = lose;

  // Display Guesses Remaining value on page
  document.getElementById("guesses-remained").innerHTML = guessNumber;

  // Display the Letters Already Guessed on page
  var guessedLetters = alreadyGuessed.toString();
  document.getElementById("guessed-letters").innerHTML = guessedLetters;

}; //ENDING KEYUP BRACE