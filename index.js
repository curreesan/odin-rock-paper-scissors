//UI 

//track scores
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");

const display = document.querySelector(".display-result")
const score = document.querySelector(".display-score")

buttons.addEventListener('click', function(e){
    playRound(e.target.id);
})

//simulate a random choice(either rock,paper or scissors) from Computer
function getComputerChoice() {
    let number = Math.floor(Math.random()* 3)

    if (number === 0) {
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else return "scissors"
}

//returns final result after 5 games 
function finalWinnerDeclaration(scoreHuman, scoreComputer) {
    if (scoreHuman == scoreComputer) return `It's a DRAW as both scores are ${scoreHuman}`; 

    return (scoreHuman > scoreComputer) ? `You WIN as you beat computer ${scoreHuman} times!` : `You LOSE as computer beat you ${scoreComputer} times!`
}

function displayResult(output) {
    display.textContent = output;
}

function displayScore(scoreOfHuman,scoreOfComputer) {
    score.textContent = `YOUR SCORE: ${scoreOfHuman} <> COMPUTER SCORE: ${scoreOfComputer}`
}

//1 round logic 
function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        //neither win conditions
        if (humanChoice == computerChoice) {
            displayResult(`It's a Draw, both picked ${humanChoice}`)
            displayScore(humanScore, computerScore);
        }

        //human win conditions 
        if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            displayResult(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
            displayScore(humanScore, computerScore);
        }

        //human lose conditions 
        if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            displayResult(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
            displayScore(humanScore, computerScore);
        }

    }


