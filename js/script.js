console.log("RECON CRAFT(JS File) CHECKING FOR CONNECTION (Console.logging) WITH MOTHERSHIP (HTML File)")

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