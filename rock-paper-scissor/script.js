let playerScore = 0;
let compScore = 0;

const controls = document.querySelector(".controls");
const statusLine = document.querySelector(".status");

controls.addEventListener("click", (event) => {
    target = event.target;
    let playerSelection = "";
    switch(target.id){
        case "rock":
            playerSelection = "Rock";
            break;
        case "paper":
            playerSelection = "Paper";
            break;
        case "scissor":
            playerSelection = "Scissor";
            break;
        default:
            return;
    }

    let computerSelection = getComputerChoice();

    statusLine.innerHTML = "Player Selection: " + playerSelection + "<br>";
    statusLine.innerHTML += "Computer Selection: " + computerSelection + "<br><br>";

    let result = playRound(playerSelection, computerSelection);

    updateResults(result);

});

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    compScore = 0;

    statusLine.innerHTML = "";

    updateScore();
})

function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33){
        return "Rock";
    }
    if (num < 0.66) {
        return "Paper";
    }
    return "Scissor";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Draw";
    }

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "Lose";
    }

    if (playerSelection === "Rock" && computerSelection === "Scissor"){
        return "Win";
    }

    if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "Win";
    }

    if (playerSelection === "Paper" && computerSelection === "Scissor"){
        return "Lose";
    }

    if (playerSelection === "Scissor" && computerSelection === "Rock"){
        return "Lose";
    }

    if (playerSelection === "Scissor" && computerSelection === "Paper"){
        return "Win";
    }

}

function updateResults (result) {
    switch (result) {
        case "Win":
            playerScore += 1;
            statusLine.innerHTML += "EZ Win! Lets Go!!!!";
            break;
        case "Lose":
            compScore += 1;
            statusLine.innerHTML += "Git Gud Loser!";
            break;
        case "Draw":
            statusLine.innerHTML += "Draw! Boring. Go Again";
            break;

    }

    updateScore();
}

function updateScore () {
    const pScore = document.querySelector("#playerscore");
    pScore.textContent = playerScore;

    const cScore = document.querySelector("#compscore");
    cScore.textContent = compScore;

}

