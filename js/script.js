console.log("RECON CRAFT(JS File) CHECKING FOR CONNECTION (Console.logging) WITH MOTHERSHIP (HTML File)")
/*
ROCK PAPER SCISSORS
1 - CREATE FUNCTION TO GENERATE COMPUTER CHOICE
2 - CREATE FUNCTION TO GET CHOICE FROM PLAYER
3 - CREATE ROUND FUNCTION TO COMPARE BOTH CHOICES
4 - CREATE SCORE VARIABLES
5 - MAKE THE ROUND FUNCTION INCREASE THE SCORE
6 - CREATE FUNCTION TO PLAY 5 ROUNDS
7 - DECLARE THE BIG WINNER
*/

// Variables
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

/*
This function generates a random number and picks out a choice from that. It originally had the
computerChoice declared inside of it with a blank string, but when I made the final function to
actually play the game, it returned the empty string every time. I'm still not quite sure why that
happened but it didn't happen anymore when I removed the variable declaration from inside the
function.
*/
function getComputerChoice(){
    randomNum = Math.random()
    if (randomNum <= 0.333) {
        computerChoice = "rock";
    } else if (randomNum >= 0.666) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

/*
This function gets the choice from the player. I originally made it in a way that converted it to
lowercase and checked to see if the input was valid, and if it wasn't it ran the function again. I
don't know the implications of calling a function inside of itself, seems a little advanced for my
current knowledge level, so I simplified it by considering any invalid inputs as Rock.
*/
function getHumanChoice() {
    humanChoice = prompt(`Please write "Rock", "Paper" or "Scissors"\n(Please double check the spelling, your choice will default to "Rock" if it's spelled incorrectly)`).toLowerCase();
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = "rock";
    }
    return humanChoice;
}

/*
This is the round play function. My first attempt checked for a tie, then checked for every other
possible option individually in several if else statements. After some thinking, I realized there
can only be a tie and three situations where the player wins, everything else doesn't really matter,
so I wrote the code again to reflect that change.
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You and the computer chose ${humanChoice}! It's a tie!`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`${humanChoice} beats ${computerChoice}! You win!`);
        return humanScore++;
    } else {
        console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
        return computerScore++;
    }
}

/*
This is the function that runs the game 5 times and keeps track of the score. The assignment page says
it's possible to do this without loops, but after attempting several times in several different ways,
I admitted defeat and decided to dabble into loops. Thanks to a youtube video by Giovanna Proença and
the solution from fellow Odin Project student Ryan Jones, I was able to create this loop to run the
game. I'm still not quite sure why it wasn't working without the loop, could very well be a silly
mistake I just failed to account for, but for now I think it's better to keep moving along the course
rather than getting stuck and frustrated in this one issue that can be so easily resolved with content
from the next one or two lessons. Better to save up the brain cells for the learning that is yet to
come, and come back to this project when I feel more prepared to tackle it.
*/
function playGame() {
    for (let round = 1; round <= 5; round ++) {
        console.log(`Round ${round}`);
        getHumanChoice();
        getComputerChoice();
        console.log(`The computer chooses: ${computerChoice}`);
        playRound(humanChoice,computerChoice);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer's score: ${computerScore}`);
        if (round === 5) {
            if (humanScore === computerScore) {
                console.log(`You won ${humanScore} time(s)`);
                console.log(`The computer won ${computerScore} time(s)`);
                console.log("It's a tie!")
            } else if (humanScore > computerScore) {
                console.log(`You won ${humanScore} time(s)`);
                console.log(`The computer won ${computerScore} time(s)`);
                console.log("You win!")
            } else {
                console.log(`You won ${humanScore} time(s)`);
                console.log(`The computer won ${computerScore} time(s)`);
                console.log("You lose :(")
            }
        }
    }
}

playGame();