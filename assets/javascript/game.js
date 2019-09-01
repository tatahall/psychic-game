//create variable for computer guess and random letter generator
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(letters)

//create a variable for computer's guess
var computerGuess; 
var assignComputerGuess = function (){ 
    computerGuess = letters[Math.floor(Math.random() * letters.length)];}

assignComputerGuess();

console.log(computerGuess)

//create variable for user guess


//create variables for wins and losses
var wins = 0;
var lose = 0;

//create a variable for guesses remaining. user should have 9 guesses.
var remainingGuess = 9;

//create variable to write the text to appropriate place on the HTML.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var loseText = document.getElementById("lose-text");
var remainingGuessText = document.getElementById("remaining-text");

var userGuess = 0;

userChoiceText.textContent = "Your Guess: " + userGuess;
winsText.textContent = "Wins: " + wins;
loseText.textContent = "Losses: " + lose;
remainingGuessText.textContent = "Remaining Guesses: " + remainingGuess;

//create a variable to note the guess made so far
var totalUserGuess = [];

//create an event for the user to make their choice. User should be able press any letter a-z.
//computer has random choice made when the game starts.
//the user enters their choice by pressing a key (a-z).
//if the user's guess equals the computers, the number of wins needs to increase.  The game should end and reset.
//if the users guess does not equal the computer's guess: need to decrease remaining guess, user should 
//choose again and the user text should update with new choice.
//want user to have 9 chances.

var gameReset = function (){
    assignComputerGuess();
    console.log("new guess " + computerGuess);
    totalUserGuess = [];
    console.log("empty array " + totalUserGuess);
    remainingGuess = 9;
}

document.onkeyup = function (event) {
    userGuess = event.key

    if (userGuess === computerGuess) {
        totalUserGuess.push(userGuess);
        wins++;
        alert("You Win!");
        console.log(alert);
        gameReset();
        //reset game -- which means computer picks a new guess
    }
    else {
        remainingGuess--;
        totalUserGuess.push(userGuess);
    }
    if (remainingGuess === 0) {
        lose++;
        alert("You Lose...Try Again!");
        gameReset();
        //reset game? -- computer picks a new guess and remainingGuess is reset to 0
    }

    userChoiceText.textContent = "Your Guesses so far: " + totalUserGuess;
    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + lose;
    remainingGuessText.textContent = "Remaining Guesses: " + remainingGuess;

    console.log(totalUserGuess)
    //var playAgain = confirm("Play Again?");
    //added the text.content below so it would increment appropriately

   
}
