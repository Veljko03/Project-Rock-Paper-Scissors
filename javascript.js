


let options = ["Rock", "Paper","Scissors"];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    choice = choice.toLowerCase();
    console.log(choose);

    return choice;
}


function player(){
    let choose = prompt("Choose your option: Rock/Paper/Scissors");
    choose = choose.toLowerCase();
    console.log(choose);
    
    return choose;
}


let playerWon =0;
let computerWon =0;



function playGame(){
    playRound(player(),getComputerChoice());
    playRound(player(),getComputerChoice());
    playRound(player(),getComputerChoice());
    playRound(player(),getComputerChoice());
    playRound(player(),getComputerChoice());
    if(playerWon == computerWon){
        console.log("Its draw");
    }
    else if(playerWon > computerWon){
        console.log("You won!");
    } else{
        console.log("You lose!");

    }
   

    
}


function playRound(playerSelection,computerSelection){
    
    if(playerSelection == "rock" && computerSelection=="scissors"){
        console.log("You Won! Scissors beats Rock");
        playerWon++;
    }
    else if (playerSelection == "paper" && computerSelection=="scissors"){
        console.log("You Lose! Scissors beats Paper");
        computerWon++;
    }
    else if (playerSelection == "scissors" && computerSelection=="scissors"){
        console.log("Draw! Play again");
        playerWon++;
        computerWon++;
        
    }
    else if (playerSelection == "rock" && computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");
        computerWon++;

    }
    else if (playerSelection == "scissors" && computerSelection=="paper"){
        console.log("You Won! Scissors beats Paper");
        playerWon++;
    }
    else if (playerSelection == "paper" && computerSelection=="paper"){
        console.log("Draw! Play again");
        playerWon++;
        computerWon++;
        
    }
    else if (playerSelection == "paper" && computerSelection=="rock"){
        console.log("You Won! Paper beats Rock");
        playerWon++;
    }
    else if (playerSelection == "scissors" && computerSelection=="rock"){
        console.log("You Lose! Rock beats Scissors");
        computerWon++;

    }
    else if (playerSelection == "rock" && computerSelection=="rock"){
        console.log("Draw, Play again!"); 
        playerWon++;  
        computerWon++;

    } 
    else{
        console.log("wrong input");
    }
    console.log(playerWon);
    console.log(computerWon);
     
}


playGame();

