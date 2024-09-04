console.log("RECON CRAFT(JS File) CHECKING FOR CONNECTION (Console.logging) WITH MOTHERSHIP (HTML File)")

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

const playerSelect = document.getElementById("buttons");
const txtPlay = document.getElementById("txtplay");
const btnPlay = document.getElementById("btnplay");


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
};


function getHumanChoice() {
    humanChoice = prompt(`Please write "Rock", "Paper" or "Scissors"\n(Please double check the spelling, your choice will default to "Rock" if it's spelled incorrectly)`).toLowerCase();
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = "rock";
    }
    return humanChoice;
};

playerSelect.addEventListener("click", function(e){
    for(const child of playerSelect.children) {
        child.style.backgroundColor="white";
    }
    if (e.target.innerText.length > 8) {
        humanChoice = "";
    } else {
        humanChoice = e.target.innerText.toLowerCase();
        e.target.style.backgroundColor="lightslategray";
    }
    //e.target.style.backgroundColor="lightslategray"; // fix background changing color when clicked
    console.log(humanChoice);
    return humanChoice;
});


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
};

// plays 5 rounds
/*
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
*/

// playGame();