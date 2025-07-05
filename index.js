//UI 

//track scores
let humanScore = 0;
let computerScore = 0;
let gameNumber = 1;

const buttons = document.querySelector(".buttons");

const gameCount = document.querySelector(".game-count")
const display = document.querySelector(".display-result");
const score = document.querySelector(".display-score");
const winner = document.querySelector(".display-winner");

buttons.addEventListener('click', function(e){
    if((humanScore <5 && computerScore <5) && (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors")) {
            playRound(e.target.id);
    }else {
        alert("Click on the actual buttons, idiot")
    }})

//simulate a random choice(either rock,paper or scissors) from Computer
function getComputerChoice() {
    let number = Math.floor(Math.random()* 3)

    if (number === 0) {
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else return "scissors"
}

//display winner after one of them gets to 5 wins
function displayWinner() {
    winner.textContent =  (humanScore > computerScore) ? `You WIN :)` : `You LOSE :(`
}

//display text result in the UI after each round
function displayResult(output) {
    display.textContent = output;
}

//display score result in the UI after each round
function displayScore() {
    score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`
}

function displayGameCount() {
    gameCount.textContent = gameNumber;
}

function checkGameEnd() {
    if (humanScore >= 5 || computerScore >= 5) {
        displayWinner();
        // resetGame();
    }
}

//1 round logic 
function playRound(humanChoice) {

        const computerChoice = getComputerChoice();
        
        //neither win conditions
        if (humanChoice == computerChoice) {
            displayResult(`It's a Draw, both picked ${humanChoice}`)
            displayScore();
        }
        
        //human win conditions 
        if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            displayResult(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
            displayScore();
        }
        
        //human lose conditions 
        if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            displayResult(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
            displayScore();
        }
        
        gameNumber++;
        displayGameCount();
        checkGameEnd();    
        
    }
    

