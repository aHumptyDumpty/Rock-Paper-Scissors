function computerPlay(){

    //created "selectionArray" to hold selection of strings 
    let selectionArray = ["Rock", "Paper", "Scissors"];

    //set selection to grab a random string from selectionArray at random 
    let compSelection = selectionArray[Math.floor(Math.random() * selectionArray.length)]

    //returns selected random string from array to console
    return compSelection;
}

// function startGame() that takes in two parameters 
function startGame(playerSelection, computerSelection){
    //initialized variable result to empty string
    let result = "";

    // if- if/else statements to match player and computer selections and store winner
    if(computerSelection == "Scissors" && playerSelection == "Rock"){
        result = "Human Wins!";
    }
    else if(computerSelection == "Paper" && playerSelection == "Rock"){
        result = "Robot Wins";
    }
    else if(computerSelection == "Rock" && playerSelection == "Rock"){
        result = "Its a Draw!"
    }

    //return winner of game to variable result
    return result;
}

// constants created for playerSelection & computerSelection
const playerSelection = "Rock";
const computerSelection = computerPlay();

//created function playFiveTimes to play 5 games of RPS
function playFiveTimes(){
    for(let i = 0; i < 5; i++){
        startGame();
    }
}
 

// print out 1 game of rock paper scissors to console
//console.log(startGame(playerSelection, computerSelection))

console.log(playFiveTimes());          