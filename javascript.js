
let options = ["Rock", "Paper","Scissors"];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    choice = choice.toLocaleLowerCase();
    return choice;
}



let choose = prompt("Choose your option: Rock/Paper/Scissors");
choose = choose.toLocaleLowerCase();
console.log(choose);

computerSelection = getComputerChoice(options);
console.log(computerSelection);

playRound(choose,computerSelection);

function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock" && computerSelection=="scissors"){
        console.log("You Won! Scissors beats Rock");
    }
    else if (playerSelection == "paper" && computerSelection=="scissors"){
        console.log("You Lose! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection=="scissors"){
        console.log("Draw! Play again");
        
    }
    else if (playerSelection == "rock" && computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection == "scissors" && computerSelection=="paper"){
        console.log("You Won! Scissors beats Paper");
    }
    else if (playerSelection == "paper" && computerSelection=="paper"){
        console.log("Draw! Play again");
        
    }
    else if (playerSelection == "paper" && computerSelection=="rock"){
        console.log("You Won! Paper beats Rock");
    }
    else if (playerSelection == "scissors" && computerSelection=="rock"){
        console.log("You Lose! Rock beats Scissors");
    }
    else if (playerSelection == "rock" && computerSelection=="rock"){
        console.log("Draw, Play again!");     
    }   
}
