console.log("hello test?");

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const PLAYER = 0;
const COMPUTER = 1;

let playerScore = 0;
let computerScore = 0;

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
function playRound(playerChoice, computerChoice) {
   
    let winner;
    let winningCondition;

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
            console.log("You Win! " + winningCondition); playerScore++; break;
        }
        case COMPUTER: {
            console.log("You Lose! " + winningCondition); computerScore++; break;
        }
        default: { 
            console.log("Tie! " + winningCondition); break;
        }
    }

    return(winner);
}

// Welcome in console and run five rounds
function game() {
    let playerChoice = 0;
    let computerChoice = 0;

    while(playerScore < 5 && computerScore < 5) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        let winner = playRound(playerChoice, computerChoice);
    }

    if(playerScore == 5) {
        console.log(`The winner is... YOU! The final score is ${playerScore} to ${computerScore}.`);
    }
    else {
        console.log(`The winner is... COMPUTER! The final score is ${computerScore} to ${playerScore}.`);
    }
}

game();