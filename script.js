let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const max = 3
    let computerChoice

    let ranNum = Math.floor(Math.random() * max)

    if (ranNum == 1) {
        computerChoice = "rock"
    } else if (ranNum == 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }

    return computerChoice
}

// console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissor")

    let validChoice = false
    while (!validChoice) {
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissor") {
            // console.log("validvalidvalid")
            validChoice = true
        } else {
            humanChoice = prompt("rock, paper, or scissor lowercase only")
            humanChoice = humanChoice.toLowerCase()
        }
    }

    return humanChoice
}

// playRound(humanSelection, computerSelection)

function playRound() {
    // console.log(humanChoice, typeof humanChoice)
    // console.log(humanChoice)

    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        console.log(computerChoice)
        console.log(`computer: ${computerScore}`)
        console.log(`human: ${humanScore}`)
        alert("try again, its a tie!")
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log(computerChoice)
        computerScore += 1;
        console.log(`computer: ${computerScore}`)
        console.log(`human: ${humanScore}`)
        alert("computer wins, you lose!")
    } else if ((humanChoice === "paper") && (computerChoice === "scissor")) {
        console.log(computerChoice)
        computerScore++;
        console.log(`computer: ${computerScore}`)
        console.log(`human: ${humanScore}`)
        alert("computer wins, you lose!")
    } else if ((humanChoice === "scissor") && (computerChoice === "rock")) {
        console.log(computerChoice)
        computerScore++;
        console.log(`computer: ${computerScore}`)
        console.log(`human: ${humanScore}`)
        alert("computer wins, you lose!")
    } else {
        console.log(computerChoice)
        humanScore++;
        console.log(`computer: ${computerScore}`)
        console.log(`human: ${humanScore}`)
        alert("good job, you win!")
    }
}

for (i = 1; i < 6; i++) {
    console.log("round:" + i)
    playRound()
}
