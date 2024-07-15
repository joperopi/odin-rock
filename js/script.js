console.log("RECON CRAFT(JS File) CHECKING FOR CONNECTION (Console.logging) WITH MOTHERSHIP (HTML File)")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = "";
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

function getHumanChoice() {
    humanChoice = prompt(`Please write "Rock", "Paper" or "Scissors"\n(Please double check the spelling, your choice will default to "Rock" if it's spelled incorrectly)`).toLowerCase();
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = "rock";
    }
    return humanChoice;
}

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