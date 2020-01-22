const choices = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
const modal = document.querySelector(".modal");
const scoreBoard = {
    player: 0,
    computer: 0
};

// Play game.
function playGame(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = checkWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner);
}

// Computer choice.
function getComputerChoice() {
    const rand = Math.floor(Math.random() * choices.length + 1);

    if (rand === 1) {
        return "rock";
    } else if (rand === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Check the winner.
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}

choices.forEach(choice => choice.addEventListener("click", playGame));
