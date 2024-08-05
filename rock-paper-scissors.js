let computerScore = 0;
let humanScore = 0;

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

function playRound(humanChoice, computerChoice) {
    let resultMessage;
    if (typeof humanChoice !== 'string'){
        console.error('Error: humanChoice is not a string:', humanChoice);
        return;
    }

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    
    if (humanChoice === computerChoice){
        const tieDiv = document.querySelector('#tie');
        tieDiv.textContent = ("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ){
        humanScore++;
        const winDiv = document.querySelector('#win');
        winDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    } else {
        computerScore++;
        const loseDiv = document.querySelector("#lose");
        loseDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
    }
    const resultsDiv = document.querySelector('#results');
    resultsDiv.textContent = `Current scores - You: ${humanScore}, Computer: ${computerScore}`
}

const rockButton = document.getElementById('rock');
const scissorButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');

rockButton.addEventListener('click', function(){
    playRound('rock',getComputerChoice());
});

scissorButton.addEventListener('click', function(){
    playRound('scissors',getComputerChoice());
});

paperButton.addEventListener('click', function(){
    playRound('paper',getComputerChoice());
});