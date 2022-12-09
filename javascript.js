const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const PLAYER = 0;
const COMPUTER = 1;

let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector('#resultDisplay');
const playerScoreDisplay = document.querySelector('#yourScore');
const computerScoreDisplay = document.querySelector('#cpuScore');

// Randomly return ROCK, PAPER or SCISSORS
function getComputerChoice() {
    let choice = (Math.random() * (3 - 1) + 1).toPrecision(1);
    return(choice);
}

// Prompt for a player choice and return ROCK, PAPER or SCISSORS
function getPlayerChoice() {
    let playerChoiceString = prompt("Rock, Paper, Scissors?");

    switch(playerChoiceString.toLowerCase()) {
        case 'rock': return(ROCK);
        case 'paper': return(PAPER);
        case 'scissors': return(SCISSORS);
    }
}

// Play a single round and return either PLAYER, COMPUTER or null for tie
function playRound(e, computerChoice = (Math.random() * (3 - 1) + 1).toPrecision(1)) {
   
    let winner;
    let winningCondition;
    let playerChoice = this.dataset.choice;

    if((playerChoice == 1) && (computerChoice == 3)) {winner = PLAYER; winningCondition = 'Rock beats Scissors';}
    if((playerChoice == 2) && (computerChoice == 1)) {winner = PLAYER; winningCondition = 'Paper beats Rock';}
    if((playerChoice == 3) && (computerChoice == 2)) {winner = PLAYER; winningCondition = 'Scissors beats Paper';}
    
    if((computerChoice == 1) && (playerChoice == 3)) {winner = COMPUTER;  winningCondition = 'Rock beats Scissors';}
    if((computerChoice == 2) && (playerChoice == 1)) {winner = COMPUTER;  winningCondition = 'Paper beats Rock';}
    if((computerChoice == 3) && (playerChoice == 2)) {winner = COMPUTER;  winningCondition = 'Scissors beats Paper';}

    if((computerChoice == 1) && (playerChoice == 1)) {winner = null;  winningCondition = 'Rock ties Rock';}
    if((computerChoice == 2) && (playerChoice == 2)) {winner = null;  winningCondition = 'Paper ties Paper';}
    if((computerChoice == 3) && (playerChoice == 3)) {winner = null;  winningCondition = 'Scissors ties Scissors';}


    switch(winner) {
        case PLAYER: {
            resultDisplay.textContent = "You Win! " + winningCondition;
            playerScore++; 
            playerScoreDisplay.textContent = playerScore;
            checkWinner();
            break;
        }
        case COMPUTER: {
            resultDisplay.textContent = "You Lose! " + winningCondition;
            computerScore++; 
            computerScoreDisplay.textContent = computerScore;
            checkWinner();
            break;
        }
        default: { 
            resultDisplay.textContent = "Tie! " + winningCondition;
            break;
        }
    }

    return(winner);
}


// Checks for winner, returns true if there is a winner, false if not
function checkWinner()
{
    if(playerScore == 5) resultDisplay.textContent = "You've won 5 rounds! Hurray!";
    else if(computerScore == 5) resultDisplay.textContent = "Aww. The computer won 5 rounds!";

    if(playerScore == 5 || computerScore == 5) {
        const gameButtons = document.querySelectorAll('button');
        gameButtons.forEach(gameButton => {
            gameButton.disabled = true;        
        })
        return(true);
    }

    return(false);
}

// Welcome in console and run five rounds
function game() {
    let playerChoice = 0;
    let computerChoice = 0;

    // Add listeners to the buttons
    const gameButtons = document.querySelectorAll('button');
 
    gameButtons.forEach(gameButton => {
        gameButton.addEventListener("click", playRound);
    })
}

game();