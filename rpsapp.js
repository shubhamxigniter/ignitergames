const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choice')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
  setTimeout(getResult, 550); // getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length + 1)
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'ROCK'
    }
    if(randomNumber === 2){
        computerChoice = 'PAPER'
    }
    if(randomNumber === 3){
        computerChoice = 'SCISSORS'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
   if(userChoice && computerChoice){
    if(computerChoice === userChoice){
        result = 'it is a draw'
    }
    else if(computerChoice === 'ROCK' && userChoice ==='PAPER'){
        result = 'you win!'
    }
    else if(computerChoice === 'ROCK' && userChoice ==='SCISSORS'){
        result = 'you lost!'
    }
    else if(computerChoice === 'PAPER' && userChoice ==='SCISSORS'){
        result = 'you win!'
    }
    else if(computerChoice === 'PAPER' && userChoice ==='ROCK'){
        result = 'you lost!'
    }
    else if(computerChoice === 'SCISSORS' && userChoice ==='ROCK'){
        result = 'you win!'
    }
    else if(computerChoice === 'SCISSORS' && userChoice ==='PAPER'){
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}}