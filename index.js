const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let result;
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(
    "click",(e) =>{
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResults();
    }
))

function generateComputerChoice(){
    let random = Math.floor(Math.random() * possibleChoices.length + 1)
    if(random == 1){
        computerChoice = 'rock'
    } else if(random == 2){
        computerChoice = "scissors"
    } else {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults (){
    if(computerChoice == userChoice){
        result = "its a draw!"
    } else if (computerChoice == "rock" && userChoice == "paper"){
        result = "you win!"
    } else if(computerChoice =="rock" && userChoice == "scissors"){
        result = "you lose!"
    } else if(computerChoice == "paper" && userChoice =="rock"){
        result = "you lose!"
    } else if(computerChoice == "paper" && userChoice == "scissors"){
        result = "you win!"
    } else if(computerChoice =="scissors" && userChoice =="rock"){
        result = "you win!" 
    } else if(computerChoice =="scissors" && userChoice =="paper"){
        result = "you lose!"
    }
    resultDisplay.innerHTML = result;
}