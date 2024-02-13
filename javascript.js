
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


