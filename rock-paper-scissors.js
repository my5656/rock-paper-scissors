function getComputerChoice(){
    let getComputerChoice = Math.random()*3;
    if (getComputerChoice < 1){
        return "rock";
    }
    else if (getComputerChoice < 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Type your choice: rock, paper, or scissors!").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        alert("Invalid choice. Please type either rock, paper, or scissors.");
        return getHumanChoice();
    }
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase + computerChoice.slice(1)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase + humanChoice.slice(1)}.`);
    }
    console.log(`Current scores - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame(){
    let humanChoice1 = getHumanChoice();
    let computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);

    let humanChoice2 = getHumanChoice();
    let computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

    let humanChoice3 = getHumanChoice();
    let computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);

    let humanChoice4 = getHumanChoice();
    let computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);

}

playGame();