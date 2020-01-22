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
}

// Computer choice.
function getComputerChoice() {
    const rand = Math.floor(Math.random() * choices.length + 1);

    if (rand === 1) {
        return "rock";
    } else if (rand === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

choices.forEach(choice => choice.addEventListener("click", playGame));
