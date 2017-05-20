var win = 0;// counts letters for win
var lose = 0;// counts letters for win
var pickedWord; // a word chosen for the user to guess
var placeholder; // a place for the word the computer choose
var splitWord; //compares letter that user is guessing
var totalLetters; 
var guessNumber; // how many times the player gussed
var userGuess;// number of times where the use guses
var alreadyGuessed = [];//letters that are already gusssed
var correctLetters = 0;//
// Array of Star Wars Hangman words created from object.
var flowers = ["ROSE","JASMINE","DAHLIA","MAGNOLIA","IRSES","VIOLET",
"MARIGLOD", "POPPY","PETUNA","PEONY","CAMILIA","CYPRESS","LILAC","TULIP"];

//function that used to start the game 
function initializeGame() {
guessNumber = 10;
alreadyGuessed = [];
correctLetters = 0;
//Randomly choose a word for the user to guess
    pickedWord = flowers[Math.floor(Math.random()*flowers.length)];
    console.log("pickedWord is " + pickedWord + ", index position " + flowers.indexOf(pickedWord));
    flowers.splice(pickedWord, 0);  // This removes the picked element from the array

//Generate placeholder text for the word the computer chooses
    placeholder = pickedWord.split("");
    for (var i = 0; i < placeholder.length; i++) {
      placeholder[i] = " _";
      // console.log (placeholder[i]);

    };  
  
  splitWord = pickedWord.split("");
  totalLetters = splitWord.length;  

}; //ending initialize() brace
initializeGame();

// Check if user input is only alphabet keys
function lettersOnly() {
  var charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91)) {
    console.log("You pressed alphabet key");
    return true;
  } else {
    console.log("Please press a letter key only");
    return false;
  }
  
};

document.onkeyup = function(event) {
// Determine which key was pressed
var userGuess = event.key.toUpperCase();
    console.log(userGuess + " UPPERCASE LETTER");

function prevGuess () {
  if (alreadyGuessed.includes(userGuess)) { 
    return true;
  }
  else { 
    return false;
  }
};

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
      alreadyGuessed.push(userGuess);
      }
      else if ((userGuess == splitWord[i]) && (prevGuess()==true) && (lettersOnly()==true)) {
      console.log("keep going");
      }

// can there be a second part to the for loop here?
    else if ((userGuess != splitWord[i])) {
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
    };
    // Check if user won or loss
correctLetters = 0;

console.log("pickedWord is " + pickedWord + ", index position " + flowers.indexOf(pickedWord));
for (var i = 0; i < splitWord.length; i++) {


    if ((splitWord[i] == placeholder[i])){
      correctLetters++;
      console.log("correct letters value: " + correctLetters);
      
      if ((totalLetters == correctLetters) && (guessNumber > 0)) {
        console.log("Congratulations!")
        win++;
        document.querySelector("#answer").innerHTML = "<p><strong>The correct word was: " + pickedWord +"</strong></p>";
        //document.querySelector("#imgPlaceholder").innerHTML = '<img src="' + imgArray[theWord.indexOf(pickedWord)] + '">'
        initializeGame();
      }

    } else if ((totalLetters !== correctLetters) && (guessNumber <= 0)) {
      console.log("You lose")
      lose++;

      //document.querySelector("#imgPlaceholder").innerHTML = '<img src="' + imgArray[theWord.indexOf(pickedWord)] + '">'
      initializeGame();
      }
};

//injecting HTML to our page.
 var currentWord = "<p>" + placeholder.join('') + "</p>";
document.querySelector("#word-placeholder").innerHTML = currentWord;
//display correct letters
  // Display Wins value on page
  document.querySelector("#win").innerHTML = win;

  // Display Loses value on page
  document.querySelector("#losses").innerHTML = lose;

  // Display Guesses Remaining value on page
  document.querySelector("#guesses").innerHTML = guessNumber;

  // Display the Letters Already Guessed on page
     var guessedLetters = alreadyGuessed.toString();
  document.querySelector("#letters-guessed").innerHTML = guessedLetters;
};
