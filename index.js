console.log("WELCOME TO ROCK, PAPER OR SCISSORS GAME")

//simulate a random choice(either rock,paper or scissors) from Computer
function getComputerChoice() {
    let number = Math.floor(Math.random()* 3)

    if (number === 0) {
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else return "scissors"
}

//get user choice of either rock,paper, or scissors from UI
function getHumanChoice() {
    const humanChoice = prompt("rock, paper, or scissors?").toLowerCase();
    return humanChoice
}

//Game Logic
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    //simulates 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`GAME ${i}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection, " < human , comp > ", computerSelection)
        playRound(humanSelection, computerSelection);
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
    }
    
    //compares human and computer choice and declares the result of a round
    function playRound(humanChoice, computerChoice) {

        //neither win conditions
        if (humanChoice == computerChoice) {
            console.log(`It's a Draw, both picked ${humanChoice}`)
        }

        //human win conditions 
        if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }

        //human lose conditions 
        if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }

    }
}

playGame();