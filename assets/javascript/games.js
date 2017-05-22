var win = 0;// counts letters for win
var lose = 0;// counts letters for win
var chosenWord; // a word chosen for the user to guess
var placeholder; // a place for the word the computer chooses
var gussWord; //compares letter that user is guessing
var totalLetters; 
var guessNumber; // how many times the player gussed
var userGuess;// number of times where the use guses
var alreadyGuessed = [];//letters that are already gusssed
var rightLetters = 0;//

var flowers = [ "CAMILIA","CYPRESS","DAHLIA",
"IRSES","JASMINE","LILAC","LILY","MAGNOLIA","MARIGLOD","PEONY",
"PETUNA","POPPY","ROSE","TULIP","VIOLET",
];
//create function initialize
function gameStart() {
  guessNumber = 10;
  alreadyGuessed = [];
 //create random word for the user to guess
 for (var i = 0; i < flowers.length; i++) {
  chosenWord = flowers[Math.floor(Math.random() * flowers.length)];    
    flowers.splice(chosenWord, 0); //remove picked element from array 
  }
$("#img").attr("src", "assets/images/"+chosenWord.toLowerCase()+".jpg");
  $("#img").hide();
//placeholder for the word the computer chooses
placeholder = chosenWord.split("");
for (var i = 0; i < placeholder.length; i++) {
  placeholder[i] = " _";
}; 
//$("#img").attr("src", "assets/images/"+chosenWord.toLowerCase()+".jpg");
  //$("#img").hide();
//Creates array with the letters of the choosen word 
gussWord = chosenWord.split("");
totalLetters = gussWord.length;  
};

//("#img").attr("src", "assets/images/"+chosenWord.toLowerCase()+".jpg");
  //$("#img").hide();
 // this helps the user to see if they use on alpahabets
 function lettersOnly(e, t) {
  try {
    if (window.event) {
      var charCode = window.event.keyCode;
    }
    else if (e) {
      var charCode = e.which;
    }
    else { return true; }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
      return true;
    else
      return false;
  }
  catch (err) {
    alert(err.Description);
  }
}

function prevGuess () {
  var userGuess = event.key;
  if (alreadyGuessed.includes(userGuess)) { 
    return true;
  }
  else { 
    return false;
  }
};

gameStart();

// When the user presses a key, it will run the following functions...
document.onkeyup = function(event) {
  var keyPress;
  if (typeof event != 'undefined') { // this helps the user to type lower or upper case
    keyPress = event.keyCode;
    userGuess = String.fromCharCode(keyPress).toUpperCase();    // Convert user input key to upper case string.
  }  
    //console.log(userGuss + " should match the key entered");

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

rightLetters = 0; // this helps to identify the correct and wrong word

for (var i = 0; i < gussWord.length; i++) {

  if ((gussWord[i] == placeholder[i])){
    rightLetters++;

    if ((totalLetters == rightLetters) && (guessNumber > 0)) {
      //console.log("Congratulations!")
      win++;
   $("#img").show('fast');
    gameStart();
  }

} else if ((totalLetters !== rightLetters) && (guessNumber <= 0)) {
    //console.log("You lose.")
    lose++;
    $("#img").show('fast');

    gameStart();
  }
   currentWord = placeholder.join('')  // creates a place for the word
 };
currentWord = placeholder.join('') // clears a place holder with other connections
guessedLetters = alreadyGuessed.toString();// clears the current letter as soon as possible


// connecting the html page with our javascript & diplays every value.
document.getElementById("word-placeholder").innerHTML = currentWord;
document.getElementById("won").innerHTML = win;
document.getElementById("los").innerHTML = lose;
document.getElementById("guesses-remained").innerHTML = guessNumber;
document.getElementById("guessed-letters").innerHTML = guessedLetters;

}; //ENDS ALL THE ACTIVITY And key up function