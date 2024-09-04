console.log("RECON CRAFT(JS File) CHECKING FOR CONNECTION (Console.logging) WITH MOTHERSHIP (HTML File)")

let roundNum = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

const playerSelect = document.getElementById("buttons");
const txtPlay = document.getElementById("txtplay");
const btnPlay = document.getElementById("btnplay");
const guy = document.getElementById("guy");
const bot = document.getElementById("bot");
const playerScoreboard = document.getElementById("playerScoreboard");
const computerScoreboard = document.getElementById("computerScoreboard");
const roundPage = document.getElementById("roundPage");


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
    console.log(humanChoice);
    return humanChoice;
});

function reset() {
    roundNum = 0;
    humanScore = 0;
    computerScore = 0;
    humanChoice = "";
    for(const child of playerSelect.children) {
        child.style.backgroundColor="white";
    }
    txtPlay.innerText = "Pick one of the options!";
    guy.style.content = `url("img/rps-guy-neutral.png")`;
    bot.style.content = `url("img/rps-bot-neutral.png")`;
    roundPage.innerText = `Round 0`;
    playerScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;

}

btnPlay.addEventListener("click", function(e){
    getComputerChoice();
    if (humanChoice === "") {
        txtPlay.innerText = "Please pick one of the options!";
    } else if (humanChoice != "") {
        if (humanChoice === computerChoice) {
            txtPlay.style.innerText = `You and the computer chose ${humanChoice}! It's a tie!`;
            guy.style.content = `url("img/rps-guy-neutral.png")`;
            bot.style.content = `url("img/rps-bot-neutral.png")`;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            txtPlay.innerText = `${humanChoice} beats ${computerChoice}! You win!`;
            guy.style.content = `url("img/rps-guy-happy.png")`;
            bot.style.content = `url("img/rps-bot-sad.png")`;
            humanScore++;
        } else {
            txtPlay.innerText = `${computerChoice} beats ${humanChoice}! You lose!`;
            guy.style.content = `url("img/rps-guy-sad.png")`;
            bot.style.content = `url("img/rps-bot-happy.png")`;
            computerScore++;
        }     
        ++roundNum;
        console.log("round number: ", roundNum);
        console.log("player choice: ", humanChoice);
        console.log("computer choice: ", computerChoice);
        roundPage.innerText = `Round ${roundNum}`;
        playerScoreboard.textContent = humanScore;
        computerScoreboard.textContent = computerScore;
        if (roundNum === 5) {
            if (humanScore === computerScore) {
                txtPlay.innerText = `You and the computer have the same score! It's a tie! Press the play button to start again.`;
                guy.style.content = `url("img/rps-guy-neutral.png")`;
                bot.style.content = `url("img/rps-bot-neutral.png")`;
            } else if (humanScore > computerScore) {
                txtPlay.innerText = `You scored more, so you win! Press the play button to start again.`;
                guy.style.content = `url("img/rps-guy-win.png")`;
                bot.style.content = `url("img/rps-bot-sad.png")`;
            } else {
                txtPlay.innerText = `The computer scored more, you lose! Press the play button to start again.`;
                guy.style.content = `url("img/rps-guy-sad.png")`;
                bot.style.content = `url("img/rps-bot-win.png")`;
            }
        } else if (roundNum === 6) {
            reset();
        }
    }
});

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