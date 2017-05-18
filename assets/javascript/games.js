/* words that will be used for the game.*/
var cars =  [ "Bugatti","lumborghini","Tesla"
"Audi", "Jaguar","lexus","Mercedes", "Cadillaic",
"Bmw","Acura","Maserati", "land rover","Jeep"," acura"
,"kia"];

//Variables for tracking our wins, currentwords and gussedWords. They begin at 0.
      var word = cars[Math.floor(Math.random() * cars.length)];// the random # that will be selected
      from the cars array.

      var answerArray = []; // new  array used to hold the answer array
      for (i = 0; i < word.length; i++) {
      	answerArray[i] = "_"

      }
var remainingLetters = word.length // creates letters that remain to kbe guessed.
if (remainingLetters>0) {

} else {

}
document.onkeyup = function(event) {
	var userGuess = event.key;
	for(j= 0; j < word.length; j++){
		if(word[j]) === guess
			answerArray[j] = guess;
		remainingLetters-1
	}
}




}

