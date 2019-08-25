//create variable for computer guess and random letter generator
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
console.log(letters)
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var computerGuesslower = computerGuess.toLowerCase;

//guesses left. starting at 9.
var remainingGuesses = 9 - 1;
console.log(remainingGuesses)

//create variable for user guess.
var Guess = document.onkeyup = function (event) {
    userGuess.textContent = event.key;
}
console.log(userGuess)

var userGuess = document.getElementById("userGuess");

//create variables for wins and losses
var wins = +1;
var losses = +1;

function compare() {
if(userGuess == computerGuess){
document.getElementById("#wins").value;
document.write(wins++)

}
else{
document.getElementById("#remguess")
document.write(remainingGuesses--)
}
}

compare();

function loss(){
if(remainingGuesses === 0){
    document.getElementById("#losses");
    ++losses;
}
}
loss();
