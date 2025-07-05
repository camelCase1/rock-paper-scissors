let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    const max=3
    let computerChoice

    let ranNum = Math.floor(Math.random() * max)

    if (ranNum == 0) {
        computerChoice = "rock"
    } else if (ranNum == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }
    
    return computerChoice
}

// console.log(getComputerChoice())

function getHumanChoice () {
    let humanChoice = prompt("Enter rock, paper, or scissor")
}

// getHumanChoice()

function playRound (humanChoice, computerChoice) {
    actualHumanChoice = humanChoice.toLowerCase()
    if (actualHumanChoice = computerChoice) {
        return "try again, its a tie!"
    } else if ((actualHumanChoice === "rock") || (computerChoice === "paper")) {
        computerScore += 1;
        return "computer wins, you lose!"
    } else if ((actualHumanChoice === "paper") || (computerChoice === "scissor")) {
        computerScore += 1;
        return "computer wins, you lose!" 
    } else {
        humanScore += 1;
        return "you win!"
    }
}


