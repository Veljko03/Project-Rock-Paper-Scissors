
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const playerr = document.getElementById("ply");
const score = document.getElementById("str");
const computer = document.getElementById("com");

const message = document.getElementById("final");


let playerWon =0;
let computerWon =0;
let playedGames =0;



btnRock.addEventListener('click', () => {
    playRound(player("rock"),getComputerChoice());
    playedGames++;
    
    const para = document.createElement("p");
    para.textContent = "You choosed: ROCK";
    const para2 = document.createElement("p");
    para2.textContent = "Computer: "+cc;
    playerr.appendChild(para);
    computer.appendChild(para2);

    const paraScore = document.createElement("p");
    paraScore.textContent = playerWon + " : "+ computerWon;
    score.appendChild(paraScore);

    const paraMessage = document.createElement("h2");
    paraMessage.textContent =    playGame();
    message.appendChild(paraMessage);
    
    if(playedGames ==5){
        const btn = document.createElement("button");
        btn.textContent="PLay again";

        message.appendChild(btn);

        btn.addEventListener('click', () =>{
        window.location.reload();
        


        });
        
    }
    
});

btnPaper.addEventListener('click', () => {
    playRound(player("paper"),getComputerChoice());
    playedGames++;
    const para = document.createElement("p");
    para.textContent = "You choosed: paper";
    const para2 = document.createElement("p");
    para2.textContent = "Computer: " + cc;
    playerr.appendChild(para);
    computer.appendChild(para2);
    const paraScore = document.createElement("p");
    paraScore.textContent = playerWon + " : "+ computerWon;
    score.appendChild(paraScore);
    
    const paraMessage = document.createElement("h2");
    paraMessage.textContent =    playGame();
    message.appendChild(paraMessage);
    if(playedGames ==5){
        const btn = document.createElement("button");
        btn.textContent="PLay again";

        message.appendChild(btn);

        btn.addEventListener('click', () =>{
            window.location.reload();
        });
    }
});

btnScissors.addEventListener('click', () => {
    playRound(player("scissors"),getComputerChoice());
    playedGames++;
   
    const para = document.createElement("p");
    para.textContent = "You choosed: scissors";
    const para2 = document.createElement("p");
    para2.textContent = "Computer: " + cc;
    playerr.appendChild(para);
    computer.appendChild(para2);

    const paraScore = document.createElement("p");
    paraScore.textContent = playerWon + " : "+ computerWon;
    score.appendChild(paraScore);
    
    

    const paraMessage = document.createElement("h2");
    paraMessage.textContent =    playGame();
    message.appendChild(paraMessage);
    
    if(playedGames ==5){
        const btn = document.createElement("button");
        btn.textContent="PLay again";

        message.appendChild(btn);

        btn.addEventListener('click', () =>{
            window.location.reload();


        });
    }
});


let options = ["Rock", "Paper","Scissors"];
let cc;
function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    choice = choice.toLowerCase();
    console.log(choice);
    cc=choice;
    return choice;
}


function player(option){
    let choose = option;
    
    console.log(choose);
    
    return choose;
}






function playGame(){
    
    if(playedGames ==5){
        document.getElementById("rock").setAttribute("disabled", true);
        document.getElementById("paper").setAttribute("disabled", true);
        document.getElementById("scissors").setAttribute("disabled", true);

        

        if(playerWon == computerWon){
           return "Its draw";
        }
        else if(playerWon > computerWon){
            return "You won!";
        } else{
            return  "You lose!";
        }

       
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




