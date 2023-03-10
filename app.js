const choices = document.querySelectorAll('.choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.querySelector('.result');

let playerScoreValue = 0;
let computerScoreValue = 0;

function computerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerIndex = Math.floor(Math.random() * 3);
    return computerChoices[computerIndex];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.textContent = 'You win!';
        playerScoreValue++;
        playerScore.textContent = playerScoreValue;
    } else {
        result.textContent = 'You lose!';
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
    }
}

function playerChoiceHandler(e) {
    const playerChoice = e.target.id;
    const computerChoiceValue = computerChoice();
    checkWinner(playerChoice, computerChoiceValue);

    if (playerChoice === 'rock') {
        const rockSound = document.getElementById('rock-sound');
        rockSound.play();
    } else if (playerChoice === 'paper') {
        const paperSound = document.getElementById('paper-sound');
        paperSound.play();
    } else if (playerChoice === 'scissors') {
        const scissorsSound = document.getElementById('scissors-sound');
        scissorsSound.play();
    }
}

choices.forEach(choice => choice.addEventListener('click', playerChoiceHandler));
