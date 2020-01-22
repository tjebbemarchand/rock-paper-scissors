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
    showWinner(winner, computerChoice);
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

function incrementScore(winner) {
    scoreBoard[winner]++;
}

function showWinner(winner, computerChoice) {
    if (winner === "player") {
        // Increment player score.
        incrementScore(winner);

        // Show modal result.
        result.innerHTML = `
            <h1 class="text-win">You win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else if (winner === "computer") {
        // Increment computer score.
        incrementScore(winner);

        // Show modal result.
        result.innerHTML = `
            <h1 class="text-lose">You lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else {
        // Show modal result.
        result.innerHTML = `
            <h1>Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }

    // Show score.
    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `;

    // Show modal.
    modal.style.display = "block";
}

// Restart game.
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;

    restart.style.display = "none";
}

// Clear and close modal.
function closeModal(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

choices.forEach(choice => choice.addEventListener("click", playGame));
restart.addEventListener("click", restartGame);
window.addEventListener("click", closeModal);
