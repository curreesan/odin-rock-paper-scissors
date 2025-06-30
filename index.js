console.log("Hellow World")

function getComputerChoice() {
    let number = Math.floor(Math.random()* 3)
    console.log(number)
    if (number === 0) {
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else return "scissors"
}

const computerChoice = getComputerChoice()
console.log(computerChoice)